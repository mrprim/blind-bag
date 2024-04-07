type StateSelector<T> = (state: T) => unknown;

// FIX THIS TYPING
type StateGetter<T> = (selector?: StateSelector<T>) => T | any;

type StateMutator<T> = (state: T) => T;
type StateSetterArg<T> = T | StateMutator<T>;
type StateSetter<T> = (arg: StateSetterArg<T>) => void;

interface Store<T> {
  getState: StateGetter<T>,
  setState: StateSetter<T>,
}

const isSetMutator = <T>(value: StateSetterArg<T>): value is StateMutator<T> => typeof value === 'function';

const createStore = <T>(_state: T): Store<T> => {
  let state = { ..._state };

  return {
    getState: (arg = s => s) => arg(state),
    setState: (arg) => {
      state = isSetMutator(arg) ? arg(state) : arg;
    },
  }
}

export { createStore, isSetMutator };
export type { StateSetter, StateGetter, Store }