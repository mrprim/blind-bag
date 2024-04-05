import getBag from "./getBag";

const getBicycleDeck = () => getBag('bicycleCards');
const getBananagrams = () => getBag('bananagrams');
const getScrabble = () => getBag('scrabble');
const getSpellRpg = () => getBag('spellRpg');
const getTarotDeck = () => getBag('tarotCards');


export { getBicycleDeck, getBananagrams, getScrabble, getSpellRpg, getTarotDeck };
export default getBag;