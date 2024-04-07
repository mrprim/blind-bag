import collection, { Collection } from "../collections";
import { TokenSetName } from "../tokenSets";
import { Token } from "../tokens";
import { filterNulls, shuffle } from "../utils/array";

interface Deck extends Collection {
  shuffle: () => void;
};

type Arg = TokenSetName | Token[];

const deck = (arg: Arg): Deck => {
  const base = collection(arg);
  const store = base.store;

  const drawOne = () => {
    const [ token, ...remaining ] = store.getContents();
    if(!token) return null;

    store.setContents(remaining),
    store.setDrawn(drawn => [...drawn, token]); 

    return token;
  }

  return {
    ...base,
    shuffle: () => store.setContents(contents => shuffle(contents)),
    drawOne,
    draw: (count = 1) => Array(count).fill(null).map(drawOne).filter(filterNulls),
  } as const
}

export default deck;