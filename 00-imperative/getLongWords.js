// const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
// const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 */

/**
 * Returns an array of strings with length equal or greater than 5.
 *
 * @param {string[]} wordsList - The array of words to filter.
 * @returns {string[]} An array containing words with length equal or greater than 5.
 */
export default function getLongWords(wordsList) {
    const longWordsList = [];

    const longWordsListLength = wordsList.length;

    for (let word = 0; word < longWordsListLength; word++) {
        const currentWord = wordsList[word];
        if (currentWord.length >= 5) {
            longWordsList.push(currentWord)
        }
    }

    return longWordsList;
}
