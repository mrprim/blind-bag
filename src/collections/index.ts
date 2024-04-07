import tokenSets, { TokenSetDefinition, TokenSetName } from "../tokenSets";
import { Token } from "../tokens";
import { filterNulls } from "../utils/array";
import { getRandomInt } from "../utils/random";
import { CollectionStore, createCollectionStore } from "./store";

type DrawOne = () => Token | null;

interface Collection {
  tokenSet: TokenSetDefinition,
  store: CollectionStore,
  drawOne: DrawOne;
  draw: (count: number, putBackAfterDraw: boolean) => Token[];
  refill: () => void;
  replace: (item: Token | Token[]) => void;
}

type Arg = TokenSetName | Token[];

const isTokenSet = (arg: Arg): arg is TokenSetName => typeof arg === 'string';

const getTokenSet = (arg: Arg): TokenSetDefinition => {
  if (isTokenSet(arg)) {
    return tokenSets[arg];
  }
  
  return ({
  ...tokenSets.custom,
  tokens: [ ...arg],
});
}

const collection = (arg: Arg): Collection => {
  const tokenSet = getTokenSet(arg);
  const store = createCollectionStore({ tokenSetName: tokenSet.name, contents: [...tokenSet.tokens], drawn: [] })

  const drawOne = () => {
    const contentLength = store.getContents().length
    const tokenIndex = getRandomInt(contentLength) - 1;
    const token = store.getContents()[tokenIndex];

    if(!token) return null;

    store.setContents(contents => contents.filter((_, i) => i !== tokenIndex)),
    store.setDrawn(drawn => [...drawn, token]); 

    return token;
  }

  return {
    tokenSet,
    store,
    drawOne,
    draw: (count = 1) => Array(count).fill(null).map(drawOne).filter(filterNulls),
    refill: () => {
      const drawn = store.getDrawn();
      store.setContents(contents => [ ...contents, ...drawn]);
      store.setDrawn([]);
    },
    replace: () => {
      // const tokens = getArrayFromArrayOrItem(arg);

      // tokens.forEach((t) => {
      //   const drawnIndex = contents.findIndex(c => c === t)
      //   if (!drawnIndex) return;
      //   drawn = drawn.filter((_, i) => i !== drawnIndex)
      //   contents.push(t)
      // })
    },
  } as const
}

export type { Collection };
export default collection;