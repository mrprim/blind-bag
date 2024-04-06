import { Collection } from "../collections";
import tokenSets, { TokenSetDefinition, TokenSetName } from "../tokenSets";
import { Token } from "../tokens";
import { filterNulls } from "../utils/array";
import { getRandomInt } from "../utils/random";
import { createCollectionStore } from "./store";

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
    const contentLength = store.getContentLength();
    const tokenIndex = getRandomInt(contentLength) - 1;
    const token = store.getContents()[tokenIndex];

    if(!token) return null;

    store.setState((state) => ({
      ...state,
      contents: state.contents.filter((_, i) => i !== tokenIndex),
      drawn: [...state.drawn, token] 
    }));

    return token;
  }

  return {
    tokenSet,
    count: () => store.getContentLength(),
    contents: () => store.getContents(),
    drawn: () => store.getState((state) => [ ...state.drawn ]),
    drawOne,
    draw: (count = 1) => Array(count).fill(null).map(drawOne).filter(filterNulls),
    refill: () => {
      store.setState((state) => ({
        ...state,
        contents: [ ...state.contents, ...state.drawn]
      }));
    },
    replace: (arg) => {
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

export default collection;