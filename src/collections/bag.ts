import type { Collection } from "../collections";
import collection from "../collections";
import { Token } from "../tokenSets";
import { ArrayOrItem, filterNulls, getArrayFromArrayOrItem } from "../utils/array";
import { getRandomInt } from "../utils/random";

interface Bag extends Collection {
  drawOne: () => Token | null;
  draw: (numberToDraw?: number) => Token[];
  put: (tokenOrTokens: ArrayOrItem<Token>) => void;
  findAndTake: (tokenOrTokens: ArrayOrItem<Token>) => Token[];
  empty: () => void;
};

const drawOne = (base: Collection): Token | null => {
  const contentLength = base.getContents().length
  const tokenIndex = getRandomInt(contentLength);
  const token = base.getContents()[tokenIndex];

  if (!token) return null;

  base.setContents(contents => contents.filter((_, i) => i !== tokenIndex))

  return token;
}

const bag = (items?: Token[]): Bag => {
  const base = collection(items ? { contents: items } : null);

  return {
    ...base,
    drawOne: () => drawOne(base),
    draw: (count = 1) => Array(count).fill(null).map(() => drawOne(base)).filter(filterNulls),
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
  } as const
}

export type { Bag }
export default bag;