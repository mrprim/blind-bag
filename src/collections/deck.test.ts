import { describe, expect, it } from "vitest";
import deck from "./deck";

const TEST_ITEMS = ['A', 'B', 'A', 'C'];

describe('deck', () => {
  it('can be initiated empty', () => {
    expect(deck().getContents()).toEqual([]);
  })
  it('can be initiated with contents', () => {
    expect(deck(TEST_ITEMS).getContents()).toEqual(TEST_ITEMS);
  })

  describe('drawOne', () => {
    it('draws the top card of the deck by default', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.drawOne();
      expect(drawn).toEqual('A');
      expect(testDeck.getContents().length).toEqual(3);
    });

    it('draws the top card of the deck when location is "top"', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.drawOne('top');
      expect(drawn).toEqual('A');
      expect(testDeck.getContents().length).toEqual(3);
    });

    it('draws the bottom card of the deck when location is "bottom"', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.drawOne('bottom');
      expect(drawn).toEqual('C');
      expect(testDeck.getContents().length).toEqual(3);
    });

    it('draws a random card when location is "random"', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.drawOne('random');
      expect(drawn).toBeTruthy();
      expect(TEST_ITEMS.includes(drawn!)).toBeTruthy();
      expect(testDeck.getContents().length).toEqual(3);
    });

    it('draws card at index when location is a number', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.drawOne(2);
      expect(drawn).toEqual('A');
      expect(testDeck.getContents()).toEqual(['A', 'B', 'C']);
    });

    it('returns null if the deck is empty', () => {
      expect(deck().drawOne()).toBeNull();
    })


    it('returns null if no card at specified index', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.drawOne(9);
      expect(drawn).toBeNull();
      expect(testDeck.getContents().length).toEqual(4);
    });
  });

  describe('draw', () => {
    it('draws a random single item out of the deck if no arg passed in', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.draw();
      expect(drawn.length).toEqual(1);
      expect(TEST_ITEMS.includes(drawn[0]!)).toBeTruthy();
      expect(testDeck.getContents().length).toEqual(3);
    });

    it('draws X random items out of the deck if arg is X', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.draw(2);
      expect(drawn.length).toEqual(2);
      expect(TEST_ITEMS.includes(drawn[0]!)).toBeTruthy();
      expect(TEST_ITEMS.includes(drawn[1]!)).toBeTruthy();
      expect(testDeck.getContents().length).toEqual(2);
    });

    it('only draws a max of as many items are in the deck', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.draw(5);
      expect(drawn.length).toEqual(4);
      expect(TEST_ITEMS.includes(drawn[0]!)).toBeTruthy();
      expect(TEST_ITEMS.includes(drawn[1]!)).toBeTruthy();
      expect(TEST_ITEMS.includes(drawn[2]!)).toBeTruthy();
      expect(TEST_ITEMS.includes(drawn[3]!)).toBeTruthy();
      expect(testDeck.getContents().length).toEqual(0);
    });

    it('draws from the bottom of the deck if bottom passed in', () => {
      const testDeck = deck(TEST_ITEMS);
      const drawn = testDeck.draw(2, 'bottom');
      expect(drawn).toEqual(['C', 'A']);
      expect(testDeck.getContents().length).toEqual(2);
    });

  })

  describe('put', () => {
    it('can add one item to the contents', () => {
      const testDeck = deck(TEST_ITEMS);
      testDeck.put('T')
      expect(testDeck.getContents().length).toEqual(5);
      expect(testDeck.getContents().includes('T')).toBeTruthy();
    })

    it('can add multiple items to the contents', () => {
      const testDeck = deck(TEST_ITEMS);
      testDeck.put(['A', 'T'])
      expect(testDeck.getContents().length).toEqual(6);
      expect(testDeck.getContents().filter(v => v === 'A').length).toEqual(3);
      expect(testDeck.getContents().includes('T')).toBeTruthy();
    })
  });

  describe('empty', () => {
    it('removes all contents', () => {
      const testDeck = deck(TEST_ITEMS);
      testDeck.empty();

      expect(testDeck.getContents().length).toEqual(0);
    })
  });

  describe('findAndTake', () => {
    it('takes one item out of the deck', () => {
      const testDeck = deck(TEST_ITEMS);
      const taken = testDeck.findAndTake('A');

      expect(testDeck.getContents()).toEqual(['B', 'A', 'C']);
      expect(taken).toEqual(['A'])
    })

    it('takes multiple items out of the deck', () => {
      const testDeck = deck(TEST_ITEMS);
      const taken = testDeck.findAndTake(['A', 'B']);

      const contents = testDeck.getContents()
      expect(contents.length).toEqual(2);
      expect(contents[0]).toEqual('A');
      expect(contents[1]).toEqual('C');
      expect(taken).toEqual(['A', 'B'])
    })

    it('only takes items that were already in the deck', () => {
      const testDeck = deck(TEST_ITEMS);
      testDeck.empty();

      expect(testDeck.getContents().length).toEqual(0);
    })

  });

});