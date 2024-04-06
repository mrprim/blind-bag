import bananagrams from '../../data/bananagrams.set.yaml';
import scrabble from '../../data/scrabble.set.yaml';
import spellRpg from '../../data/spell-rpg.set.yaml';
import bicycleCards from '../../data/bicycle-cards.set.yaml';
import minorArcana from '../../data/minor-arcana.set.yaml';
import majorArcana from '../../data/major-arcana.set.yaml';
import parseSchema from './parseSchema';
import { Token, TokenType } from '../tokens';

type TokenSetName = 'bananagrams'
| 'scrabble'
| 'spellRpg'
| 'bicycle'
| 'majorArcana'
| 'minorArcana'
| 'tarot'
| 'custom';

interface TokenSetDefinition {
  name: TokenSetName;
  tokenType: TokenType;
  tokens: Token[];
}

const tokenTypeMap: Record<TokenSetName, TokenType> = {
  bananagrams: 'tile',
  scrabble: 'tile',
  spellRpg: 'tile',
  bicycle: 'card',
  majorArcana: 'card',
  minorArcana: 'card',
  tarot: 'card',
  custom: 'mixed',
}

const buildTokenSet = (name: TokenSetName, data: string[]): TokenSetDefinition => {
  const tokens = parseSchema(data.flatMap(d => d) as string[]);

  return {
    name,
    tokenType: tokenTypeMap[name],
    tokens,
  } as const
}

const CUSTOM_TOKEN_SET: TokenSetDefinition = {
  name: 'custom',
  tokenType: tokenTypeMap.custom,
  tokens: [],
} as const;

// TODO: Figure out this typing issue
const tokenSets: Record<TokenSetName, TokenSetDefinition> = {
  bananagrams: buildTokenSet('bananagrams', bananagrams as string[]),
  scrabble: buildTokenSet('scrabble', scrabble as string[]),
  spellRpg: buildTokenSet('spellRpg', spellRpg as string[]),
  bicycle: buildTokenSet('bicycle', bicycleCards as string[]),
  minorArcana: buildTokenSet('minorArcana', minorArcana as string[]),
  majorArcana: buildTokenSet('majorArcana', majorArcana as string[]),
  tarot: buildTokenSet('tarot', [...minorArcana as string[], ...majorArcana as string[]]),
  custom: CUSTOM_TOKEN_SET,
};

export type { TokenSetName, TokenSetDefinition }
export { CUSTOM_TOKEN_SET }
export default tokenSets;