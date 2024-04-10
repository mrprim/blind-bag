import deck from "./collections/deck"
import { BICYCLE, MAJOR_ARCANA, MINOR_ARCANA, TAROT } from "./tokenSets"

const bicycle = () => deck(BICYCLE)
const majorArcana = () => deck(MAJOR_ARCANA)
const minorArcana = () => deck(MINOR_ARCANA)
const tarot = () => deck(TAROT)

export {
  bicycle,
  majorArcana,
  minorArcana,
  tarot,
}
