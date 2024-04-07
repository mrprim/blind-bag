const filterNulls = <T>(v: T | null | undefined): v is T => !!v;

type ArrayOrItem<T> = T | Array<T>;

const isSingleItem = <T>(value: T | T[]): value is T => !Array.isArray(value);

const getArrayFromArrayOrItem = <T>(value: ArrayOrItem<T>): T[] => isSingleItem(value) ? [ value ]: value;

const shuffle = <T>(unshuffled: T[]): T[] => unshuffled
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

export type { ArrayOrItem };
export { filterNulls, isSingleItem, getArrayFromArrayOrItem, shuffle };