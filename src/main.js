// @flow
import dictionary from './dictionary';

// Maps num to string of characters it corresponds to
const num_to_chars: string[] = [];
num_to_chars[2] = 'abc';
num_to_chars[3] = 'def';
num_to_chars[4] = 'ghi';
num_to_chars[5] = 'jkl';
num_to_chars[6] = 'mno';
num_to_chars[7] = 'pqrs';
num_to_chars[8] = 'tuv';
num_to_chars[9] = 'wxyz';

export function parseInput(input: number[]): string[] {
  let filteredDictionary = dictionary;

  // For each number in the array...
  input.forEach((inputNumber: number, index: number) => {
    const possibleLetters = num_to_chars[inputNumber];

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

  console.log(result);
  // console.log('hello world 👋');
}
