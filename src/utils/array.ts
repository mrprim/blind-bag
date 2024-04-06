const filterNulls = <T>(v: T | null | undefined): v is T => !!v;

type ArrayOrItem<T> = T | Array<T>;

const isSingleItem = <T>(value: T | T[]): value is T => !Array.isArray(value);


const getArrayFromArrayOrItem = <T>(value: ArrayOrItem<T>): T[] => isSingleItem(value) ? [ value ]: value;

export type { ArrayOrItem };
export { filterNulls, isSingleItem, getArrayFromArrayOrItem };