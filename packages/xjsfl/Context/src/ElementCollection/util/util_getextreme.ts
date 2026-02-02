
export interface ExtremeResult<T, V> {
  min: V;
  max: V;
  minElement: T;
  maxElement: T;
}

getExtreme<T, K extends keyof T>(
  elements: readonly T[],
  prop: K
): ExtremeResult<T, T[K]> | undefined {

  if (!elements.length) {
    return undefined;
  }

  let minElement = elements[0];
  let maxElement = elements[0];
  let minValue = elements[0][prop];
  let maxValue = elements[0][prop];

  for (let i = 1; i < elements.length; i++) {
    const el = elements[i];
    const value = el[prop];

    if (value < minValue) {
      minValue = value;
      minElement = el;
    } else if (value > maxValue) {
      maxValue = value;
      maxElement = el;
    }
  }

  return {
    min: minValue,
    max: maxValue,
    minElement,
    maxElement,
  };
}

const extreme = getExtreme(elements, 'x');

if (extreme) {
  extreme.min;        // number
  extreme.max;        // number
  extreme.minElement; // Element
  extreme.maxElement; // Element
}