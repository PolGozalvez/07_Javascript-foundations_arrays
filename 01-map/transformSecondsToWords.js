// const SECONDS = [2, 5, 100];

/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

/**
 * Transforms an array of seconds into an array of stringified seconds.
 *
 * @param {number[]} secondsList - An array of seconds to be transformed.
 * @returns {string[]} An array of stringified seconds.
 */
export default function transformSecondsToWords(secondsList) {
    const arrayTransformedToString = secondsList.map((second) => {
        const secondToString = second.toString();

        return secondToString;
    });

    return arrayTransformedToString;
}
