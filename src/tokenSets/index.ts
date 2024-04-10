import bananagramsDef from './data/bananagrams.set.yaml';
import scrabbleDef from './data/scrabble.set.yaml';
import spellRpgDef from './data/spell-rpg.set.yaml';
import bicycleCardsDef from './data/bicycle-cards.set.yaml';
import minorArcanaDef from './data/minor-arcana.set.yaml';
import majorArcanaDef from './data/major-arcana.set.yaml';
import parseDefinition from './parseDefinition';

type Token = string;

type TokenSetName = 'bananagrams'
  | 'scrabble'
  | 'spellRpg'
  | 'bicycle'
  | 'majorArcana'
  | 'minorArcana'
  | 'tarot'
  | 'custom';

const buildTokenSet = (data: string[]): Token[] => parseDefinition(data.flatMap(d => d) as string[]);

export type { Token, TokenSetName }

export const BANANAGRAMS = buildTokenSet(bananagramsDef as string[])
export const SCRABBLE = buildTokenSet(scrabbleDef as string[])
export const SPELL_RPG = buildTokenSet(spellRpgDef as string[])
export const BICYCLE = buildTokenSet(bicycleCardsDef as string[])
export const MINOR_ARCANA = buildTokenSet(minorArcanaDef as string[])
export const MAJOR_ARCANA = buildTokenSet(majorArcanaDef as string[])
export const TAROT = buildTokenSet([...minorArcanaDef as string[], ...majorArcanaDef as string[]])
