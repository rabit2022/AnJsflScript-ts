import { Runtime } from './runtime';
import { ExitEvent, ExitHandler } from './types';

export function onExit(
  rt: Runtime,
  event: ExitEvent,
  listener: ExitHandler
) {
  rt.handlers[event].push(listener);

  return {
    off() {
      const list = rt.handlers[event];
      const i = list.indexOf(listener);
      if (i >= 0) list.splice(i, 1);
    },
  };
}

export function onceExit(
  rt: Runtime,
  event: ExitEvent,
  listener: ExitHandler
) {
  const wrapper: ExitHandler = (code) => {
    off();
    listener(code);
  };

  const { off } = onExit(rt, event, wrapper);
  return { off };
}
