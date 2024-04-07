const O = [
  "A ^13",
  "B ^3",
  "C ^3",
  "D ^6",
  "E ^18",
  "F ^3",
  "G ^4",
  "H ^3",
  "I ^12",
  "J ^2",
  "K ^2",
  "L ^5",
  "M ^3",
  "N ^8",
  "O ^11",
  "P ^3",
  "Q ^2",
  "R ^9",
  "S ^6",
  "T ^9",
  "U ^6",
  "V ^3",
  "W ^3",
  "X ^2",
  "Y ^3",
  "Z ^2"
], H = [
  "A ^9",
  "B ^2",
  "C ^2",
  "D ^4",
  "E ^12",
  "F ^2",
  "G ^3",
  "H ^2",
  "I ^9",
  "J ^1",
  "K ^1",
  "L ^4",
  "M ^2",
  "N ^6",
  "O ^8",
  "P ^2",
  "Q ^1",
  "R ^6",
  "S ^4",
  "T ^6",
  "U ^4",
  "V ^2",
  "W ^2",
  "X ^1",
  "Y ^2",
  "Z ^1",
  "BLANK ^2"
], P = [
  "A ^7",
  "B ^3",
  "C ^4",
  "D ^5",
  "E ^8",
  "F ^3",
  "G ^3",
  "H ^5",
  "I ^6",
  "J ^2",
  "K ^2",
  "L ^5",
  "M ^4",
  "N ^5",
  "O ^6",
  "P ^3",
  "Q ^2",
  "R ^5",
  "S ^5",
  "T ^8",
  "U ^4",
  "V ^2",
  "W ^4",
  "X ^2",
  "Y ^3",
  "Z ^2",
  "? ^2"
], U = [
  "ACE_SPADES",
  "TWO_SPADES",
  "THREE_SPADES",
  "FOUR_SPADES",
  "FIVE_SPADES",
  "SIX_SPADES",
  "SEVEN_SPADES",
  "EIGHT_SPADES",
  "NINE_SPADES",
  "TEN_SPADES",
  "JACK_SPADES",
  "QUEEN_SPADES",
  "KING_SPADES",
  "ACE_CLUBS",
  "TWO_CLUBS",
  "THREE_CLUBS",
  "FOUR_CLUBS",
  "FIVE_CLUBS",
  "SIX_CLUBS",
  "SEVEN_CLUBS",
  "EIGHT_CLUBS",
  "NINE_CLUBS",
  "TEN_CLUBS",
  "JACK_CLUBS",
  "QUEEN_CLUBS",
  "KING_CLUBS",
  "ACE_DIAMONDS",
  "TWO_DIAMONDS",
  "THREE_DIAMONDS",
  "FOUR_DIAMONDS",
  "FIVE_DIAMONDS",
  "SIX_DIAMONDS",
  "SEVEN_DIAMONDS",
  "EIGHT_DIAMONDS",
  "NINE_DIAMONDS",
  "TEN_DIAMONDS",
  "JACK_DIAMONDS",
  "QUEEN_DIAMONDS",
  "KING_DIAMONDS",
  "ACE_HEARTS",
  "TWO_HEARTS",
  "THREE_HEARTS",
  "FOUR_HEARTS",
  "FIVE_HEARTS",
  "SIX_HEARTS",
  "SEVEN_HEARTS",
  "EIGHT_HEARTS",
  "NINE_HEARTS",
  "TEN_HEARTS",
  "JACK_HEARTS",
  "QUEEN_HEARTS",
  "KING_HEARTS",
  "JOKER ^2"
], T = [
  "ACE_WANDS",
  "TWO_WANDS",
  "THREE_WANDS",
  "FOUR_WANDS",
  "FIVE_WANDS",
  "SIX_WANDS",
  "SEVEN_WANDS",
  "EIGHT_WANDS",
  "NINE_WANDS",
  "TEN_WANDS",
  "PAGE_WANDS",
  "KNIGHT_WANDS",
  "QUEEN_WANDS",
  "KING_WANDS",
  "ACE_PENTACLES",
  "TWO_PENTACLES",
  "THREE_PENTACLES",
  "FOUR_PENTACLES",
  "FIVE_PENTACLES",
  "SIX_PENTACLES",
  "SEVEN_PENTACLES",
  "EIGHT_PENTACLES",
  "NINE_PENTACLES",
  "TEN_PENTACLES",
  "PAGE_PENTACLES",
  "KNIGHT_PENTACLES",
  "QUEEN_PENTACLES",
  "KING_PENTACLES",
  "ACE_CUPS",
  "TWO_CUPS",
  "THREE_CUPS",
  "FOUR_CUPS",
  "FIVE_CUPS",
  "SIX_CUPS",
  "SEVEN_CUPS",
  "EIGHT_CUPS",
  "NINE_CUPS",
  "TEN_CUPS",
  "PAGE_CUPS",
  "KNIGHT_CUPS",
  "QUEEN_CUPS",
  "KING_CUPS",
  "ACE_SWORDS",
  "TWO_SWORDS",
  "THREE_SWORDS",
  "FOUR_SWORDS",
  "FIVE_SWORDS",
  "SIX_SWORDS",
  "SEVEN_SWORDS",
  "EIGHT_SWORDS",
  "NINE_SWORDS",
  "TEN_SWORDS",
  "PAGE_SWORDS",
  "KNIGHT_SWORDS",
  "QUEEN_SWORDS",
  "KING_SWORDS"
], c = [
  "THE_FOOL",
  "THE_MAGICIAN",
  "THE_HIGH PRIESTESS",
  "THE_EMPRESS",
  "THE_EMPEROR",
  "THE_HIEROPHANT",
  "THE_LOVERS",
  "THE_CHARIOT",
  "STRENGTH",
  "THE_HERMIT",
  "WHEEL_OF_FORTUNE",
  "JUSTICE",
  "THE_HANGED_MAN",
  "DEATH",
  "TEMPERANCE",
  "THE_DEVIL",
  "THE_TOWER",
  "THE_STAR",
  "THE_MOON",
  "THE_SUN",
  "JUDGEMENT",
  "THE_WORLD"
], i = /\s*(.*)\s+\^(\d+)\s*$/, W = (E) => {
  var e;
  const S = E.match(i), t = (e = S == null ? void 0 : S[1]) == null ? void 0 : e.trim(), n = Number(S == null ? void 0 : S[2]);
  return !n || !t ? [E.trim()] : Array(n).fill(t);
}, u = (E) => E.flatMap(W), C = {
  bananagrams: "tile",
  scrabble: "tile",
  spellRpg: "tile",
  bicycle: "card",
  majorArcana: "card",
  minorArcana: "card",
  tarot: "card",
  custom: "mixed"
}, o = (E, S) => {
  const t = u(S.flatMap((n) => n));
  return {
    name: E,
    tokenType: C[E],
    tokens: t
  };
}, L = {
  name: "custom",
  tokenType: C.custom,
  tokens: []
}, D = {
  bananagrams: o("bananagrams", O),
  scrabble: o("scrabble", H),
  spellRpg: o("spellRpg", P),
  bicycle: o("bicycle", U),
  minorArcana: o("minorArcana", T),
  majorArcana: o("majorArcana", c),
  tarot: o("tarot", [...T, ...c]),
  custom: L
}, I = (E) => !!E, m = (E) => E.map((S) => ({ value: S, sort: Math.random() })).sort((S, t) => S.sort - t.sort).map(({ value: S }) => S), M = (E) => Math.floor(Math.random() * Math.floor(E)), A = (E) => typeof E == "function", b = (E) => {
  let S = { ...E };
  return {
    getState: (t = (n) => n) => t(S),
    setState: (t) => {
      S = A(t) ? t(S) : t;
    }
  };
}, d = {
  tokenSetName: "custom",
  drawn: [],
  contents: []
}, G = (E) => {
  const S = { ...d, ...E }, t = b(S);
  return {
    ...t,
    getContents: () => t.getState((n) => n.contents),
    getDrawn: () => t.getState((n) => n.drawn),
    setContents: (n) => t.setState((e) => (e.contents = A(n) ? n(e.contents) : n, e)),
    setDrawn: (n) => t.setState((e) => (e.drawn = A(n) ? n(e.drawn) : n, e))
  };
}, p = (E) => typeof E == "string", f = (E) => p(E) ? D[E] : {
  ...D.custom,
  tokens: [...E]
}, l = (E) => {
  const S = f(E), t = G({ tokenSetName: S.name, contents: [...S.tokens], drawn: [] }), n = () => {
    const e = t.getContents().length, _ = M(e) - 1, s = t.getContents()[_];
    return s ? (t.setContents((a) => a.filter((w, R) => R !== _)), t.setDrawn((a) => [...a, s]), s) : null;
  };
  return {
    tokenSet: S,
    store: t,
    drawOne: n,
    draw: (e = 1) => Array(e).fill(null).map(n).filter(I),
    refill: () => {
      const e = t.getDrawn();
      t.setContents((_) => [..._, ...e]), t.setDrawn([]);
    },
    replace: () => {
    }
  };
}, N = (E) => ({
  ...l(E)
}), g = () => N("bananagrams"), F = () => N("scrabble"), K = () => N("spellRpg"), Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bananagrams: g,
  scrabble: F,
  spellRpg: K
}, Symbol.toStringTag, { value: "Module" })), r = (E) => {
  const S = l(E), t = S.store, n = () => {
    const [e, ..._] = t.getContents();
    return e ? (t.setContents(_), t.setDrawn((s) => [...s, e]), e) : null;
  };
  return {
    ...S,
    shuffle: () => t.setContents((e) => m(e)),
    drawOne: n,
    draw: (e = 1) => Array(e).fill(null).map(n).filter(I)
  };
}, V = () => r("bicycle"), k = () => r("majorArcana"), y = () => r("minorArcana"), B = () => r("tarot"), X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bicycle: V,
  majorArcana: k,
  minorArcana: y,
  tarot: B
}, Symbol.toStringTag, { value: "Module" }));
export {
  Q as bags,
  g as bananagrams,
  V as bicycle,
  X as decks,
  k as majorArcana,
  y as minorArcana,
  F as scrabble,
  K as spellRpg,
  B as tarot
};
