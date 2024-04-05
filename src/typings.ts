type Schema = string[];

type BagType = 'bananagrams'
    | 'scrabble'
    | 'spellRpg'
    | 'bicycleCards'
    | 'majorArcana'
    | 'minorArcana'
    | 'tarotCards';

interface Bag<T = string> {
    count: () => number,
    draw: () => T[];
    reset: () => void;
    discard: (...items: T[]) => void;
    fill: (...items: T[]) => void;
}