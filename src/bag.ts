import { Collection } from "./collections";
import tokenSets, { TokenSetDefinition, TokenSetName } from "./tokenSets";
import { Token } from "./tokens";
import { filterNulls } from "./utils/array";
import { getRandomInt } from "./utils/random";

interface Bag extends Collection {};

type Arg = TokenSetName | Token[];

const isTokenSet = (arg: Arg): arg is TokenSetName => typeof arg === 'string';

const isSingleToken = (value: Token | Token[]): value is Token => typeof value === 'string' || !Array.isArray(value);

const getTokenSet = (arg: Arg): TokenSetDefinition => {
  if (isTokenSet(arg)) {
    return tokenSets[arg];
  }
  
  return ({
  ...tokenSets.custom,
  tokens: [ ...arg],
});
}

const bag = (arg: Arg): Bag => {
  const tokenSet = getTokenSet(arg);
  let contents = tokenSet.tokens;
  let drawn: Token[] = []

  const drawOne = () => {
    const token = contents.splice(getRandomInt(contents.length), 1)?.[0]

    if(!token) return null;
    
    drawn.push(token)

    return token;
  }

  return {
    tokenSet,
    count: () => contents.length,
    contents: () => contents,
    drawn: () => drawn,
    drawOne,
    draw: (count = 1) => Array(count).fill(null).map(drawOne).filter(filterNulls),
    refill: () => {
      contents = [ ...contents, ...drawn ]
      drawn = []
    },
    replace: (arg) => {
      const tokens = (isSingleToken(arg) ? [ arg ] : arg)

      tokens.forEach((t) => {
        const drawnIndex = contents.findIndex(c => c === t)
        if (!drawnIndex) return;
        drawn = drawn.filter((_, i) => i !== drawnIndex)
        contents.push(t)
      })
    },
  } as const
}

export default bag;