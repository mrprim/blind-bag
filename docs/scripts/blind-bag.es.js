const R = (n) => typeof n == "function", p = (n) => {
  let t = structuredClone(n);
  return {
    getState: (E = (S) => S) => structuredClone(E(t)),
    setState: (E) => {
      t = structuredClone(R(E) ? E(t) : E);
    }
  };
}, G = {
  contents: []
}, l = (n) => {
  const t = { ...G, ...n }, E = p(t);
  return {
    ...E,
    getContents: () => E.getState((S) => S.contents),
    setContents: (S) => E.setState((e) => (e.contents = R(S) ? S(e.contents) : S, e))
  };
}, C = (n) => !!n, g = (n) => !Array.isArray(n), s = (n) => g(n) ? [n] : n, F = (n) => n.map((t) => ({ value: t, sort: Math.random() })).sort((t, E) => t.sort - E.sort).map(({ value: t }) => t), a = (n) => Math.floor(Math.random() * Math.floor(n)), I = (n) => {
  const t = n.getContents().length, E = a(t), S = n.getContents()[E];
  return S ? (n.setContents((e) => e.filter((A, _) => _ !== E)), S) : null;
}, c = (n) => {
  const t = l(n ? { contents: n } : null);
  return {
    ...t,
    drawOne: () => I(t),
    draw: (E = 1) => Array(E).fill(null).map(() => I(t)).filter(C),
    put: (E) => t.setContents((S) => [...S, ...s(E)]),
    findAndTake: (E) => {
      const S = s(E), e = [];
      return S.forEach((A) => {
        const _ = t.getState((o) => o.contents.findIndex((T) => T === A));
        _ < 0 || (e.push(A), t.setContents((o) => (o.splice(_, 1), o)));
      }), e;
    },
    empty: () => t.setContents([])
  };
}, B = [
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
], K = [
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
], V = [
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
], m = [
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
], H = [
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
], u = [
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
], y = /\s*(.*)\s+\^(\d+)\s*$/, k = (n) => {
  var e;
  const t = n.match(y), E = (e = t == null ? void 0 : t[1]) == null ? void 0 : e.trim(), S = Number(t == null ? void 0 : t[2]);
  return !S || !E ? [n.trim()] : Array(S).fill(E);
}, b = (n) => n.flatMap(k), r = (n) => b(n.flatMap((t) => t)), P = r(B), U = r(K), i = r(V), d = r(m), f = r(H), W = r(u), L = r([...H, ...u]), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BANANAGRAMS: P,
  BICYCLE: d,
  MAJOR_ARCANA: W,
  MINOR_ARCANA: f,
  SCRABBLE: U,
  SPELL_RPG: i,
  TAROT: L
}, Symbol.toStringTag, { value: "Module" })), h = () => c(P), J = () => c(U), Q = () => c(i), Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bananagrams: h,
  scrabble: J,
  spellRpg: Q
}, Symbol.toStringTag, { value: "Module" })), M = (n, t) => n.length === 0 ? -1 : t === "top" ? 0 : t === "bottom" ? n.length - 1 : t === "random" ? a(n.length) : t < n.length ? t : -1, D = (n, t) => {
  const E = M(n.getContents(), t), S = n.getContents()[E];
  return S ? (n.setContents((e) => e.filter((A, _) => _ !== E)), S) : null;
}, O = (n, t) => {
  const E = M(n.getContents(), t);
  return n.getContents()[E] ?? null;
}, N = (n) => {
  const t = l(n ? { contents: n } : null);
  return {
    ...t,
    drawOne: (E = "top") => D(t, E),
    draw: (E = 1, S = "top") => Array(E).fill(null).map(() => D(t, S)).filter(C),
    peekOne: (E = "top") => O(t, E),
    peek: (E = 1, S = "top") => Array(E).fill(null).map(() => O(t, S)).filter(C),
    put: (E) => t.setContents((S) => [...S, ...s(E)]),
    findAndTake: (E) => {
      const S = s(E), e = [];
      return S.forEach((A) => {
        const _ = t.getState((o) => o.contents.findIndex((T) => T === A));
        _ < 0 || (e.push(A), t.setContents((o) => (o.splice(_, 1), o)));
      }), e;
    },
    empty: () => t.setContents([]),
    shuffle: () => t.setContents((E) => F(E))
  };
}, X = () => N(d), x = () => N(W), j = () => N(f), $ = () => N(L), z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bicycle: X,
  majorArcana: x,
  minorArcana: j,
  tarot: $
}, Symbol.toStringTag, { value: "Module" }));
export {
  P as BANANAGRAMS,
  d as BICYCLE,
  W as MAJOR_ARCANA,
  f as MINOR_ARCANA,
  U as SCRABBLE,
  i as SPELL_RPG,
  L as TAROT,
  Y as bags,
  h as bananagrams,
  X as bicycle,
  z as decks,
  x as majorArcana,
  j as minorArcana,
  J as scrabble,
  Q as spellRpg,
  $ as tarot,
  w as tokenSets
};
