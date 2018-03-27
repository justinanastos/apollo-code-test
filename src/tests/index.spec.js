// @flow
/* eslint-env jest */
import main, { parseInput } from '../main';

describe('main', () => {
  it('should run without crashing', () => {
    expect(() => main()).not.toThrow();
  });

  it('should return a result', () => {
    expect(parseInput([2])).not.toBeUndefined();
    expect(Array.isArray(parseInput([2]))).toBe(true);
  });

  describe('given input, should include some of the outputs', () => {
    // [2] -> ['cat', 'act', 'bat', 'bubble', 'catamaran', ... ]
    describe('for single [2]', () => {
      const result = parseInput([2]);

      ['cat', 'act', 'bat', 'bubble', 'catamaran'].forEach(term => {
        it(`result should include ${term}`, () => {
          expect(result.includes(term)).toBe(true);
        });
      });

      ['xray'].forEach(term => {
        it(`result should include ${term}`, () => {
          expect(result.includes(term)).toBe(false);
        });
      });
    });

    describe('for single [9, 2, 3, 3, 5, 3]', () => {
      const result = parseInput([9, 2, 3, 3, 5, 3]);

      ['waffle'].forEach(term => {
        it(`result should include ${term}`, () => {
          expect(result.includes(term)).toBe(true);
        });
      });

      ['cat', 'act', 'bat', 'bubble', 'catamaran'].forEach(term => {
        it(`result should include ${term}`, () => {
          expect(result.includes(term)).toBe(false);
        });
      });
    });
  });
});
