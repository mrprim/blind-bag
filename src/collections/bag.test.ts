import { describe, expect, it } from "vitest";
import bag from "./bag";

const TEST_ITEMS = ['A', 'A', 'B', 'C'];

describe('bag', () => {
  it('can be initiated empty', () => {
    expect(bag().getContents()).toEqual([]);
  })
  it('can be initiated with contents', () => {
    expect(bag(TEST_ITEMS).getContents()).toEqual(TEST_ITEMS);
  })

  describe('drawOne', () => {
    describe('loop to check randomizer', () => {
      it.each(Array(10).fill(null))('draws a random item out of the bag', () => {
        const testBag = bag(TEST_ITEMS);
        const drawn = testBag.drawOne();
        expect(drawn).toBeTruthy();
        expect(TEST_ITEMS.includes(drawn!)).toBeTruthy();
        expect(testBag.getContents().length).toEqual(3);
      });

    })

    it('returns null if the bag is empty', () => {
      expect(bag().drawOne()).toBeNull();
    })
  });

  describe('draw', () => {
    describe('loop to check randomizer', () => {
      it.each(Array(10).fill(null))('draws a random single item out of the bag if no arg passed in', () => {
        const testBag = bag(TEST_ITEMS);
        const drawn = testBag.draw();
        expect(drawn.length).toEqual(1);
        expect(TEST_ITEMS.includes(drawn[0]!)).toBeTruthy();
        expect(testBag.getContents().length).toEqual(3);
      });

      it.each(Array(10).fill(null))('draws X random items out of the bag if arg is X', () => {
        const testBag = bag(TEST_ITEMS);
        const drawn = testBag.draw(2);
        expect(drawn.length).toEqual(2);
        expect(TEST_ITEMS.includes(drawn[0]!)).toBeTruthy();
        expect(TEST_ITEMS.includes(drawn[1]!)).toBeTruthy();
        expect(testBag.getContents().length).toEqual(2);
      });

      it.each(Array(10).fill(null))('only draws a max of as many items are in the bag', () => {
        const testBag = bag(TEST_ITEMS);
        const drawn = testBag.draw(5);
        expect(drawn.length).toEqual(4);
        expect(TEST_ITEMS.includes(drawn[0]!)).toBeTruthy();
        expect(TEST_ITEMS.includes(drawn[1]!)).toBeTruthy();
        expect(TEST_ITEMS.includes(drawn[2]!)).toBeTruthy();
        expect(TEST_ITEMS.includes(drawn[3]!)).toBeTruthy();
        expect(testBag.getContents().length).toEqual(0);
      });

    })
  });

  describe('put', () => {
    it('can add one item to the contents', () => {
      const testBag = bag(TEST_ITEMS);
      testBag.put('T')
      expect(testBag.getContents().length).toEqual(5);
      expect(testBag.getContents().includes('T')).toBeTruthy();
    })

    it('can add multiple items to the contents', () => {
      const testBag = bag(TEST_ITEMS);
      testBag.put(['A', 'T'])
      expect(testBag.getContents().length).toEqual(6);
      expect(testBag.getContents().filter(v => v === 'A').length).toEqual(3);
      expect(testBag.getContents().includes('T')).toBeTruthy();
    })
  });

  describe('empty', () => {
    it('removes all contents', () => {
      const testBag = bag(TEST_ITEMS);
      testBag.empty();

      expect(testBag.getContents().length).toEqual(0);
    })
  });

  describe('findAndTake', () => {
    it('takes one item out of the bag', () => {
      const testBag = bag(TEST_ITEMS);
      const taken = testBag.findAndTake('A');

      expect(testBag.getContents().length).toEqual(3);
      expect(taken).toEqual(['A'])
    })

    it('takes multiple items out of the bag', () => {
      const testBag = bag(TEST_ITEMS);
      const taken = testBag.findAndTake(['A', 'B']);

      const contents = testBag.getContents()
      expect(contents.length).toEqual(2);
      expect(contents[0]).toEqual('A');
      expect(contents[1]).toEqual('C');
      expect(taken).toEqual(['A', 'B'])
    })

    it('only takes items that were already in the bag', () => {
      const testBag = bag(TEST_ITEMS);
      testBag.empty();

      expect(testBag.getContents().length).toEqual(0);
    })

  });

});