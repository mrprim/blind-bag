import type { Collection } from "../collections";
import collection from "../collections";
import { Token } from "../tokenSets";
import { ArrayOrItem, filterNulls, getArrayFromArrayOrItem, shuffle } from "../utils/array";
import { getRandomInt } from "../utils/random";

type Location = 'top' | 'bottom' | 'random' | number;

interface Deck extends Collection {
  drawOne: (location?: Location) => Token | null;
  draw: (numberToDraw?: number, location?: Location) => Token[];
  put: (tokenOrTokens: ArrayOrItem<Token>, location?: Location) => void;
  findAndTake: (tokenOrTokens: ArrayOrItem<Token>) => Token[];
  peekOne: (location?: Location) => Token | null;
  peek: (numberToPeek?: number, location?: Location) => Token[];
  shuffle: () => void;
  empty: () => void;
};

const getTokenIndex = (contents: Token[], location: Location): number => {
  if (contents.length === 0) return -1;

  if (location === 'top') return 0;
  if (location === 'bottom') return contents.length - 1;
  if (location === 'random') return getRandomInt(contents.length);

  return location < contents.length ? location : -1;
}

const drawOne = (base: Collection, location: Location): Token | null => {
  const tokenIndex = getTokenIndex(base.getContents(), location);
  const token = base.getContents()[tokenIndex];

  if (!token) return null;

  base.setContents(contents => contents.filter((_, i) => i !== tokenIndex))

  return token;
}

const peekOne = (base: Collection, location: Location): Token | null => {
  const tokenIndex = getTokenIndex(base.getContents(), location);
  return base.getContents()[tokenIndex] ?? null;
}

const deck = (items?: Token[]): Deck => {
  const base = collection(items ? { contents: items } : null);

  return {
    ...base,
    drawOne: (location = 'top') => drawOne(base, location),
    draw: (count = 1, location = 'top') => Array(count).fill(null).map(() => drawOne(base, location)).filter(filterNulls),
    peekOne: (location = 'top') => peekOne(base, location),
    peek: (count = 1, location = 'top') => Array(count).fill(null).map(() => peekOne(base, location)).filter(filterNulls),
    put: (tokenOrTokens) => base.setContents((contents) => [...contents, ...getArrayFromArrayOrItem(tokenOrTokens)]),
    findAndTake: (tokenOrTokens) => {
      const tokens = getArrayFromArrayOrItem(tokenOrTokens);
      const result: Token[] = [];

      tokens.forEach((t) => {
        const index = base.getState(state => state.contents.findIndex((c) => c === t));
        if (index < 0) return;

        result.push(t);
        base.setContents((contents) => {
          contents.splice(index, 1)
          return contents
        })
      })

      return result;
    },
    empty: () => base.setContents([]),
    shuffle: () => base.setContents(contents => shuffle(contents))
  } as const
}

export default deck;