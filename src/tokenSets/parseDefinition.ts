const ROW_MATCHER = /\s*(.*)\s+\^(\d+)\s*$/

const parseDefinitionRow = (row: string): string[] => {
  const match = row.match(ROW_MATCHER);

  const value = match?.[1]?.trim();
  const count = Number(match?.[2]);

  if (!count || !value) {
    return [row.trim()];
  }

  return Array(count).fill(value);
};

const parseDefinition = (definition: string[]): string[] => definition.flatMap?.(parseDefinitionRow);

export { parseDefinitionRow };
export default parseDefinition;