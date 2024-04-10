import { Token } from "../tokenSets";
import { createStore, isSetMutator } from "../utils/store";
import type { StateSetter, Store } from "../utils/store";

interface CollectionState {
  contents: Token[],
}

const DEFAULT_STATE: CollectionState = {
  contents: [],
} as const;

interface Collection extends Store<CollectionState> {
  getContents: () => Token[];
  setContents: StateSetter<Token[]>;
};

const collection = (_state?: CollectionState | null): Collection => {
  const state = { ...DEFAULT_STATE, ..._state };
  const baseStore = createStore(state);

  return {
    ...baseStore,
    getContents: () => baseStore.getState(state => state.contents) as Token[],
    setContents: (arg) => baseStore.setState(state => {
      state.contents = isSetMutator(arg) ? arg(state.contents) : arg;
      return state;
    }),

  } as const;
}

export type { Collection };
export default collection;
