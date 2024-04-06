import { TokenSetName } from "../tokenSets";
import { Token } from "../tokens"
import { createStore } from "../utils/store";
import type { Store } from "../utils/store";

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
  getContentLength: () => number;
};

const createCollectionStore = (_state?: CollectionState): CollectionStore => {
  const state = { ...DEFAULT_STATE, ..._state};
  const baseStore = createStore(state);

  return {
    ...baseStore,
    getContents: () => baseStore.getState(state => state.contents as Token[]),
    getContentLength: () => baseStore.getState(state => state.contents.length as number),
  } as const;
}

export { createCollectionStore };