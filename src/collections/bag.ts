import collection, { Collection } from "../collections";
import { TokenSetName } from "../tokenSets";
import { Token } from "../tokens";

interface Bag extends Collection {};

type Arg = TokenSetName | Token[];

const bag = (arg: Arg): Bag => {
  const base = collection(arg);

  return {
    ...base,
  } as const
}

export default bag;