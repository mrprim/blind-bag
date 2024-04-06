import { Token } from "./tokens";
import { TokenSetDefinition } from "./tokenSets";

type CollectionType = 'bag' | 'deck';

type DrawOne = () => Token | null;

interface Collection {
  tokenSet: TokenSetDefinition,
  count: () => number,
  contents: () => Token[];
  drawn: () => Token[];
  drawOne: DrawOne;
  draw: (count: number, putBackAfterDraw: boolean) => Token[];
  refill: () => void;
  replace: (item: Token | Token[]) => void;
}

export type { Collection, CollectionType, DrawOne };