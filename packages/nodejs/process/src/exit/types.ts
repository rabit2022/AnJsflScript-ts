export type ExitEvent = 'beforeExit' | 'exit';
export type ExitHandler = (code: number) => void;

export interface ExitHandlers {
  beforeExit: ExitHandler[];
  exit: ExitHandler[];
}