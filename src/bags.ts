import bag from "./collections/bag";
import { BANANAGRAMS, SCRABBLE, SPELL_RPG } from "./tokenSets";

const bananagrams = () => bag(BANANAGRAMS)
const scrabble = () => bag(SCRABBLE)
const spellRpg = () => bag(SPELL_RPG)

export {
  bananagrams,
  scrabble,
  spellRpg,
}
