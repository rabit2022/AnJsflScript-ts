// Context.ts
// TS wrapper (semantic facade) for legacy Context.jsfl
// Runtime logic stays in JSFLContext; this file only improves API clarity & safety.

// ---- Legacy core type (runtime provided by compiled JSFL) ----
// This interface mirrors the EXISTING Context.jsfl behavior.
// Do NOT add logic here; keep it minimal and honest.
export interface JSFLContext {
  setDOM(value?: any): this;
  setTimeline(value?: any): this;
  setLayer(value?: any): this;
  setFrame(value?: any): this;
  setElement(value?: any): this;

  goto(): this;
  restore(): this;
}

// Provided by runtime after compiling to .jsfl
// eslint-disable-next-line @typescript-eslint/no-var-requires
// declare const Context: { new (): JSFLContext };

// ---- Semantic selectors (TS-only) ----
export type Index = number;
export type Name = string;
export type Matcher = RegExp;

// ---- Facade ----
export class ContextFacade {
  private core: JSFLContext;

  constructor(core?: JSFLContext) {
    // @ts-ignore – runtime injection
    this.core = core ?? new (Context as any)();
  }

  // ---- DOM ----
  domCurrent(): this {
    this.core.setDOM(true);
    return this;
  }

  domByName(name: Name): this {
    this.core.setDOM(name);
    return this;
  }

  // ---- Timeline ----
  timelineCurrent(): this {
    this.core.setTimeline(true);
    return this;
  }

  timeline(index: Index): this {
    this.core.setTimeline(index);
    return this;
  }

  timelineByName(name: Name): this {
    this.core.setTimeline(name);
    return this;
  }

  // ---- Layer ----
  layerCurrent(): this {
    this.core.setLayer(true);
    return this;
  }

  layer(index: Index): this {
    this.core.setLayer(index);
    return this;
  }

  layerByName(name: Name): this {
    this.core.setLayer(name);
    return this;
  }

  layerMatch(re: Matcher): this {
    this.core.setLayer(re);
    return this;
  }

  // ---- Frame ----
  frameCurrent(): this {
    this.core.setFrame(true);
    return this;
  }

  frame(index: Index): this {
    this.core.setFrame(index);
    return this;
  }

  // ---- Element ----
  elementCurrent(): this {
    this.core.setElement(true);
    return this;
  }

  element(index: Index): this {
    this.core.setElement(index);
    return this;
  }

  elementMatch(re: Matcher): this {
    this.core.setElement(re);
    return this;
  }

  // ---- Execution ----
  goto(): this {
    this.core.goto();
    return this;
  }

  restore(): this {
    this.core.restore();
    return this;
  }

  // ---- Escape hatch (rare) ----
  unsafe(fn: (core: JSFLContext) => void): this {
    fn(this.core);
    return this;
  }
}

