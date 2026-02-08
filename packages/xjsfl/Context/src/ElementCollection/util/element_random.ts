/**
 * @file: element_random.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

/**
     * Randomizes any valid element properties
     * @param    {Object}            prop        An object containing property name:value pairs
     * @param    {String}            prop        A valid String property names
     * @param    {Number}            modifier    A multiplier value
     * @param    {String}            modifier    A valid modifier property: n%, +n, -n, *n
     * @param    {Array}                modifier    A valid modifier range: [from, to]
     * @returns    {ElementCollection}
     */
    randomize: function(prop, modifier) {
        // object
        if (typeof prop === 'object') {
            var props = prop;
            for (prop in props) {
                this.randomize(prop, props[prop]);
            }
            return this;
        }

        // variable
        var isArray = Utils.isArray(modifier);

        // handle single properties
        if (/^(x|y|width|height|rotation|scaleX|scaleY|transformX|transformY|skewX|skewY)$/.test(prop)) {
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i][prop] = isArray ?
                    Utils.randomValue(modifier) :
                    Utils.randomizeValue(this.elements[i][prop], modifier);
            }
        }

        // handle compound (Array) properties such as position, scale and size
        else if (/^(pos|position|scale|size)$/.test(prop)) {
            // variables
            var values = [];
            var element, px, py, value;
            if (prop === 'pos') {
                prop = 'position';
            }

            // attribute components
            var attrs = {
                position: ['x', 'y'],
                scale: ['scaleX', 'scaleY'],
                size: ['width', 'height']
            };

            // assign per compound type
            switch (prop) {
                case 'position':
                    values = isArray ? modifier : [modifier[0], modifier[1]];
                    this.randomize({
                        x: values[0],
                        y: values[1]
                    });
                    break;

                case 'size':
                case 'scale':
                    for (var i = 0; i < this.elements.length; i++) {
                        // variables
                        element = this.elements[i];
                        px = attrs[prop][0];
                        py = attrs[prop][1];

                        // get values
                        if (isArray) {
                            if (values[2] === true) {
                                values[0] = Utils.randomValue(modifier[0], modifier[1]);
                                values[1] = values[0];
                            } else {
                                values[0] = Utils.randomizeValue(element[px], modifier[0]);
                                values[1] = Utils.randomizeValue(element[py], modifier[1]);
                            }
                        } else if (typeof modifier === 'string') {
                            value = Utils.randomizeValue(element[px], modifier[0]);
                            values = [value, value];
                        } else {
                            value = Utils.randomizeValue(Math.max(element[px], element[py]), modifier);
                            values = [value, value];
                        }

                        // assign values
                        element[px] = values[0];
                        element[py] = values[1];
                    }
                    break;
            }

        }

        // refresh
        this.refresh();

        // return
        return this;
    },

/**
				 * Get a random value between 2 numbers
				 * @param	{Array}		a			A 2-element array defining the lower and upper limits
				 * @param	{Number}	a			The lower limit of the range
				 * @param	{Number}	b			The lower limit of the range
				 * @param	{Number}	round		An optional Boolean to round to the nearest integer value
				 * @returns	{Number}				A number between a and b
				 */
				randomValue:function(a, b, round)
				{
					if(a instanceof Array)
					{
						round = b;
						b = a[1];
						a = a[0];
					}
					var value = a + (b - a) * Math.random();
					return round ? Math.round(value) : value;
				},
/**
				 * Randomnly modify a seed value with a secondary modifier component
				 * @param	{Number}	value		A value to modify
				 * @param	{Number}	modifier	An optional modifier component with which to modify the original value
				 * @param	{String}	modifier	An optional modifier component with which to modify the original value, with optional leading +,-,* or a trailing %
				 * @returns	{Number}				The modified value
				 */
				randomizeValue:function(value, modifier)
				{
					// value is a number
						if(typeof value === 'number')
						{
							// if a modifier is supplied,
								if(modifier != undefined)
								{
									// if a string is supplied,
										if(typeof modifier == 'string')
										{
											// value
												var matches = modifier.match(/([+-\/*])?(\d+(.\d+)?)(%)?/);
												if(matches)
												{
													// variables
														var modified;

													// components
														var sign	= matches[1];
														var offset	= parseFloat(matches[2]);
														var percent	= matches[4];

													// offset
														if(percent)
														{
															if(sign === '+' || sign === '-')
															{
																offset	= value * (offset / 100)
															}
															else if(sign === '*' || sign === '/')
															{
																offset	= (offset / 100);
															}
														}

													// modify value
														switch(sign)
														{
															case '+':
																modified = value + offset * Math.random();
															break;

															case '-':
																modified = value - offset * Math.random();
															break;

															case '*':
																modified = value * offset * Math.random();
															break;

															case '/':
																modified = value / offset * Math.random();
															break;

															default: // either side
																modified = value + (offset * Math.random()) - (offset / 2);
																//modified = value + (offset * 2 * Math.random()) - offset;

														}

														return modified;
												}
												else
												{
													return value;
												}

										}

									// otherwise, update according to the number
										else
										{
											return value + modifier * Math.random();
										}
								}

							// if a number is supplied, just randomize it
								else
								{
									return value * Math.random();
								}
						}

					// if value is an array, simply return a value between the two numbers
						else if(value instanceof Array)
						{
							return Utils.randomValue(value[0], value[1]);
						}

					// return
						return value;
				},
// */

















export type RandomModifier =
  | number
  | string
  | [number, number]
  | [number, number, boolean];

export class Random {
  /** 区间随机 */
  static value(a: number, b: number, round = false): number {
    const v = a + (b - a) * Math.random();
    return round ? Math.round(v) : v;
  }

  /** 根据 modifier 随机化一个值 */
  static apply(value: number, modifier?: RandomModifier): number {
    if (modifier === undefined) {
      return value * Math.random();
    }

    // [min, max]
    if (Array.isArray(modifier)) {
      const [a, b] = modifier;
      return Random.value(a, b);
    }

    // number
    if (typeof modifier === 'number') {
      return value + modifier * Math.random();
    }

    // string modifier: +10 / -20% / *2 / 10
    const match = modifier.match(/([+\-*/])?(\d+(\.\d+)?)(%)?/);
    if (!match) return value;

    const [, sign, raw, , percent] = match;
    let offset = parseFloat(raw);

    if (percent) {
      if (sign === '+' || sign === '-') {
        offset = value * (offset / 100);
      } else if (sign === '*' || sign === '/') {
        offset = offset / 100;
      }
    }

    switch (sign) {
      case '+':
        return value + offset * Math.random();
      case '-':
        return value - offset * Math.random();
      case '*':
        return value * offset * Math.random();
      case '/':
        return value / offset * Math.random();
      default:
        // 无符号：左右浮动
        return value + offset * Math.random() - offset / 2;
    }
  }
}
import { Random, RandomModifier } from './Random';

type RandomProps = Record<string, RandomModifier>;

export class ElementRandomizer<T extends ElementLike> {
  constructor(
    private elements: T[],
    private refresh: () => void
  ) {}

  randomize(prop: string | RandomProps, modifier?: RandomModifier): this {
    // object 形式
    if (typeof prop === 'object') {
      Object.entries(prop).forEach(([key, mod]) => {
        this.randomize(key, mod);
      });
      return this;
    }

    const isArray = Array.isArray(modifier);

    // 单属性
    if (/^(x|y|width|height|rotation|scaleX|scaleY|transformX|transformY|skewX|skewY)$/.test(prop)) {
      this.elements.forEach(el => {
        el[prop as keyof T] = isArray
          ? Random.value((modifier as [number, number])[0], (modifier as [number, number])[1])
          : Random.apply(el[prop as keyof T] as number, modifier);
      });
    }

    // 复合属性
    else if (/^(pos|position|scale|size)$/.test(prop)) {
      if (prop === 'pos') prop = 'position';

      switch (prop) {
        case 'position': {
          const [mx, my] = modifier as [RandomModifier, RandomModifier];
          this.randomize({ x: mx, y: my });
          break;
        }

        case 'size':
        case 'scale': {
          const [px, py] = prop === 'size'
            ? ['width', 'height']
            : ['scaleX', 'scaleY'];

          this.elements.forEach(el => {
            let v: number;

            if (Array.isArray(modifier)) {
              const [a, b, lock] = modifier;
              v = Random.value(a, b);
              el[px as keyof T] = v;
              el[py as keyof T] = lock ? v : Random.value(a, b);
            } else {
              v = Random.apply(
                Math.max(el[px as keyof T] as number, el[py as keyof T] as number),
                modifier
              );
              el[px as keyof T] = v;
              el[py as keyof T] = v;
            }
          });
          break;
        }
      }
    }

    this.refresh();
    return this;
  }
}
const randomizer = new ElementRandomizer(elements, () => this.refresh());

randomizer.randomize('x', '+50');
randomizer.randomize({
  y: '-20%',
  rotation: '10'
});
randomizer.randomize('scale', [0.5, 2, true]);
















export type Range = [number, number];

export class RandomEngine {
  static range([a, b]: Range) {
    return a + (b - a) * Math.random();
  }

  static delta(base: number, delta: number) {
    return base + delta * (Math.random() - 0.5);
  }

  static by(base: number, expr: string) {
    // 简化版：+10 / -20% / *2
    const m = expr.match(/([+\-*\/])(\d+(\.\d+)?)(%)?/);
    if (!m) return base;

    let [, op, raw, , pct] = m;
    let v = parseFloat(raw);
    if (pct) v = base * v / 100;

    switch (op) {
      case '+': return base + v * Math.random();
      case '-': return base - v * Math.random();
      case '*': return base * v * Math.random();
      case '/': return base / v * Math.random();
      default: return base;
    }
  }
}
class AttrBuilder<T> {
  private _lock = false;

  constructor(
    private elements: T[],
    private getter: (el: T) => number,
    private setter: (el: T, v: number) => void
  ) {}

  range(min: number, max: number) {
    this.elements.forEach(el =>
      this.setter(el, RandomEngine.range([min, max]))
    );
    return this;
  }

  delta(v: number) {
    this.elements.forEach(el =>
      this.setter(el, RandomEngine.delta(this.getter(el), v))
    );
    return this;
  }

  by(expr: string) {
    this.elements.forEach(el =>
      this.setter(el, RandomEngine.by(this.getter(el), expr))
    );
    return this;
  }

  lock() {
    this._lock = true;
    return this;
  }
}

class GroupBuilder<T> {
  private locked = false;

  constructor(
    private elements: T[],
    private pairs: [
      (el: T) => number,
      (el: T, v: number) => void
    ][]
  ) {}

  range(min: number, max: number) {
    this.elements.forEach(el => {
      let v = RandomEngine.range([min, max]);
      this.pairs.forEach(([_, set], i) => {
        set(el, this.locked && i ? v : RandomEngine.range([min, max]));
      });
    });
    return this;
  }

  delta(v: number) {
    this.elements.forEach(el => {
      let base = this.pairs[0][0](el);
      let r = RandomEngine.delta(base, v);
      this.pairs.forEach(([_, set]) => set(el, r));
    });
    return this;
  }

  lock() {
    this.locked = true;
    return this;
  }
}

export function random<T extends {
  x: number; y: number;
  scaleX: number; scaleY: number;
  width: number; height: number;
}>(elements: T[]) {
  return {
    x: new AttrBuilder(elements, e => e.x, (e, v) => e.x = v),
    y: new AttrBuilder(elements, e => e.y, (e, v) => e.y = v),

    group(type: 'position' | 'scale' | 'size') {
      switch (type) {
        case 'position':
          return new GroupBuilder(elements, [
            [e => e.x, (e, v) => e.x = v],
            [e => e.y, (e, v) => e.y = v]
          ]);
        case 'scale':
          return new GroupBuilder(elements, [
            [e => e.scaleX, (e, v) => e.scaleX = v],
            [e => e.scaleY, (e, v) => e.scaleY = v]
          ]);
        case 'size':
          return new GroupBuilder(elements, [
            [e => e.width, (e, v) => e.width = v],
            [e => e.height, (e, v) => e.height = v]
          ]);
      }
    },

    apply(fn?: (r: any) => void) {
      fn?.(this);
    }
  };
}

