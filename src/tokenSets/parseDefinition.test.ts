import { describe, it, expect } from 'vitest';
import parseDefinition, { parseDefinitionRow } from './parseDefinition';

describe('parseDefinitionRow', () => {
  it('should convert the definition row to a number of items defined by the ^# modifier at the end', () => {
    expect(parseDefinitionRow('A')).toEqual(['A']);
    expect(parseDefinitionRow('A A')).toEqual(['A A']);
    expect(parseDefinitionRow('A ^A')).toEqual(['A ^A']);
    expect(parseDefinitionRow('A ^3')).toEqual(['A', 'A', 'A']);
    expect(parseDefinitionRow('A    A')).toEqual(['A    A']);
    expect(parseDefinitionRow('A    A     ^2')).toEqual(['A    A', 'A    A']);
  });
});

describe('parseDefinition', () => {
  it('should convert the definition to items', () => {
    expect(parseDefinition(['A', 'B ^3'])).toEqual(['A', 'B', 'B', 'B']);
  });
});
