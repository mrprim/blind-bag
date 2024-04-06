const filterNulls = <T>(v: T | null | undefined): v is T => !!v;

export { filterNulls };