import { describe, it, expect } from 'vitest';
import parseSchema, { parseSchemaRow } from './parseSchema';

describe('parseSchema', () => {
  it('should convert the schema row to a number of items defined by the ^# modifier at the end', () => {
    expect(parseSchemaRow('A')).toEqual(['A']);
    expect(parseSchemaRow('A A')).toEqual(['A A']);
    expect(parseSchemaRow('A ^A')).toEqual(['A ^A']);
    expect(parseSchemaRow('A ^3')).toEqual(['A', 'A', 'A']);
    expect(parseSchemaRow('A    A')).toEqual(['A    A']);
    expect(parseSchemaRow('A    A     ^2')).toEqual(['A    A', 'A    A']);
  });
});

describe('parseSchema', () => {
  it('should convert the schema to items', () => {
    expect(parseSchema(['A', 'B ^3'])).toEqual(['A', 'B', 'B', 'B']);
  });
});
