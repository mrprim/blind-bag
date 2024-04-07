import { TokenSetName } from "../tokenSets";
import { Token } from "../tokens"
import { createStore, isSetMutator } from "../utils/store";
import type { StateSetter, Store } from "../utils/store";

interface CollectionState {
  tokenSetName: TokenSetName,
  drawn: Token[],
  contents: Token[],
}

const DEFAULT_STATE: CollectionState = {
  tokenSetName: 'custom',
  drawn: [],
  contents: [],
} as const;

interface CollectionStore extends Store<CollectionState> {
  getContents: () => Token[];
  getDrawn: () => Token[];
  setContents: StateSetter<Token[]>;
  setDrawn: StateSetter<Token[]>;
};

const createCollectionStore = (_state?: CollectionState): CollectionStore => {
  const state = { ...DEFAULT_STATE, ..._state};
  const baseStore = createStore(state);

  return {
    ...baseStore,
    getContents: () => baseStore.getState(state => state.contents) as Token[],
    getDrawn: () => baseStore.getState(state => state.drawn) as Token[],
    setContents: (arg) => baseStore.setState(state => {
      state.contents = isSetMutator(arg) ? arg(state.contents) : arg;
      return state;
    }),
    setDrawn: (arg) => baseStore.setState(state => {
      state.drawn = isSetMutator(arg) ? arg(state.drawn) : arg;
      return state;
    })

  } as const;
}

export type { CollectionStore };
export { createCollectionStore };
