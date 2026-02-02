// src/matcher/Type.ts
export function isNaNValue(v: any) {
  return typeof v === 'number' && Number.isNaN(v)
}

export function isInfinity(v: any) {
  return v === Infinity || v === -Infinity
}

export function getCtor(v: any) {
  if (v === null) return null
  if (v === undefined) return undefined
  return v.constructor
}