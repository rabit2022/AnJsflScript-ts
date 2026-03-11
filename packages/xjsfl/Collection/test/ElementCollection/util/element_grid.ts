/**
 * @file: element_grid.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

type GridPrecision =
  | number
  | [number, number]
  | { x: number; y: number };

type RoundingMode = -1 | 0 | 1;
/**
 * Repositions element positions to round multiples of numbers
 * @param precision  Pixel precision: same for x/y, or separate values
 * @param rounding   Round down(-1), nearest(0), or up(1). Defaults to nearest(0)
 * @returns          The original ElementCollection object
 */
toGrid(precision?: GridPrecision, rounding: RoundingMode = 0): this {
  // normalize precision
  let p: { x: number; y: number };

  if (typeof precision === 'number') {
    p = { x: precision, y: precision };
  } else if (Array.isArray(precision)) {
    p = { x: precision[0], y: precision[1] };
  } else if (precision) {
    p = { x: precision.x, y: precision.y };
  } else {
    p = { x: 1, y: 1 };
  }

  // compute offset based on rounding mode
  const offset =
    rounding < 0
      ? { x: 0.001, y: 0.001 }
      : rounding > 0
      ? { x: p.x - 0.001, y: p.y - 0.001 }
      : { x: p.x * 0.5, y: p.y * 0.5 };

  // main logic
  for (const element of this.elements) {
    let x = element.x + offset.x;
    let y = element.y + offset.y;

    x -= x % p.x;
    y -= y % p.y;

    element.x = x;
    element.y = y;
  }

  this.refresh();
  return this;
}

enum Rounding {
  Down = -1,
  Nearest = 0,
  Up = 1,
}
toGrid(precision?: GridPrecision, rounding: Rounding = Rounding.Nearest): this

toGridNearest(precision?: GridPrecision)
toGridUp(precision?: GridPrecision)
toGridDown(precision?: GridPrecision)














enum Rounding {
  Down = -1,
  Nearest = 0,
  Up = 1,
}
toGrid(precision?: GridPrecision, rounding: Rounding = Rounding.Nearest): this {
  // normalize precision
  let p: { x: number; y: number };

  if (typeof precision === 'number') {
    p = { x: precision, y: precision };
  } else if (Array.isArray(precision)) {
    p = { x: precision[0], y: precision[1] };
  } else if (precision) {
    p = { x: precision.x, y: precision.y };
  } else {
    p = { x: 1, y: 1 };
  }

  // compute offset via enum + switch
  let offset: { x: number; y: number };

  switch (rounding) {
    case Rounding.Down:
      offset = { x: 0.001, y: 0.001 };
      break;

    case Rounding.Up:
      offset = { x: p.x - 0.001, y: p.y - 0.001 };
      break;

    case Rounding.Nearest:
    default:
      offset = { x: p.x * 0.5, y: p.y * 0.5 };
      break;
  }

  // main logic
  for (const element of this.elements) {
    let x = element.x + offset.x;
    let y = element.y + offset.y;

    x -= x % p.x;
    y -= y % p.y;

    element.x = x;
    element.y = y;
  }

  this.refresh();
  return this;
}

private getGridOffset(
  precision: { x: number; y: number },
  rounding: Rounding
) {
  switch (rounding) {
    case Rounding.Down:
      return { x: 0.001, y: 0.001 };
    case Rounding.Up:
      return { x: precision.x - 0.001, y: precision.y - 0.001 };
    case Rounding.Nearest:
    default:
      return { x: precision.x * 0.5, y: precision.y * 0.5 };
  }
}

