// @flow
import dictionary from './dictionary';

// Maps num to string of characters it corresponds to
const numToChars: string[] = [];
numToChars[2] = 'abc';
numToChars[3] = 'def';
numToChars[4] = 'ghi';
numToChars[5] = 'jkl';
numToChars[6] = 'mno';
numToChars[7] = 'pqrs';
numToChars[8] = 'tuv';
numToChars[9] = 'wxyz';

export function parseInput(input: number[]): string[] {
  let filteredDictionary = dictionary;

  // For each number in the array...
  input.forEach((inputNumber: number, index: number) => {
    const possibleLetters = numToChars[inputNumber];

    if (!possibleLetters) {
      throw new Error('invalid input, better articulate this later');
    }

    const possibleMatchesList = possibleLetters.split('');

    // Iterate through the loop

    // terms that begin with a -> o(1) o(dictinoary size)

    filteredDictionary = filteredDictionary.filter(dictionaryTerm => {
      if (dictionaryTerm.length < index) {
        // This is the nth char and it's longer than the dictionary term, it can
        // never match. off by one? write test
        return false;
      }

      // ** Short circuit out of here after we've picked the best results given
      // some limit **

      // Filter so that the nth (`index`) of `dictionaryTerm` matches one of the
      // chars in `possibleLetter`
      return possibleMatchesList.includes(dictionaryTerm[index]);
    });
  });

  // This is not the right place to pare down the filtered results
  return filteredDictionary;
}

// User is the person on their phone

export default function main(): void {
  const input = [2];
  const result = parseInput(input);

  // eslint-disable-next-line no-console
  console.log(result);
  // console.log('hello world 👋');
}
