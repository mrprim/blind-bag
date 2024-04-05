import bananagrams from './schemas/bananagrams.yaml';
import scrabble from './schemas/scrabble.yaml';
import spellRpg from './schemas/spell-rpg.yaml';
import bicycleCards from './schemas/bicycle-cards.yaml';
import minorArcana from './schemas/minor-arcana.yaml';
import majorArcana from './schemas/major-arcana.yaml';

interface Schema {
  all: () => string[];
}

const buildSchema = (...data: unknown[]): Schema => {
  const items = data.flatMap(d => d) as string[];

  return {
    all: () => items,
  }
}

const schemas: Record<BagType, Schema> = {
  bananagrams: buildSchema(bananagrams),
  scrabble: buildSchema(scrabble),
  spellRpg: buildSchema(spellRpg),
  bicycleCards: buildSchema(bicycleCards),
  minorArcana: buildSchema(minorArcana),
  majorArcana: buildSchema(majorArcana),
  tarotCards: buildSchema(minorArcana, majorArcana),
};

export default schemas;