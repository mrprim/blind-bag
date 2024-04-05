const ROW_MATCHER = /\s*(.*)\s+\^(\d+)\s*$/

const parseSchemaRow = (row: string): string[] => {
  const match = row.match(ROW_MATCHER); 

  const value = match?.[1]?.trim();
  const count = Number(match?.[2]);

  if(!count || !value) {
    return [ row.trim() ];
  }

  return Array(count).fill(value);
};

const parseSchema = (schema: string[]): string[] => schema.flatMap(parseSchemaRow);

export { parseSchemaRow };
export default parseSchema;