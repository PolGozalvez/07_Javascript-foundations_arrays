import { describe, it, expect } from "vitest";
import getLongWords from "./getLongWords.js";

describe("getLongWords", () => {
    it("should return long words from LANGUAGES array", () => {
        //Arrange
        const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
        const expected = ["JavaScript", "TypeScript"];

        //Act
        const longWordsFromLanguagesArray = getLongWords(LANGUAGES);

        //Assert
        expect(longWordsFromLanguagesArray).toEqual(expected);
    });

    it("should return long words from BEATLES array", () => {
        //Arrange
        const BEATLES = ["John", "George", "Paul", "Ringo"];
        const expected = ["George", "Ringo"];

        //Act
        const longWordsFromBeatlesArray = getLongWords(BEATLES);

        //Assert
        expect(longWordsFromBeatlesArray).toEqual(expected);
    });

    it("should return an empty array if no words are long enough", () => {
        //Arrange
        const SHORT_WORDS = ["a", "bb", "ccc", "dddd"];
        const expected = [];

        //Act
        const longWordsFromShortArray = getLongWords(SHORT_WORDS);

        //Assert
        expect(longWordsFromShortArray).toEqual(expected);
    });

    it("should return the same array if all words are long enough", () => {
        //Arrange
        const ALL_LONG_WORDS = ["JavaScript", "TypeScript", "Python"];
        const expected = ALL_LONG_WORDS;

        //Act
        const longWordsFromLongArray = getLongWords(ALL_LONG_WORDS);

        //Assert
        expect(longWordsFromLongArray).toEqual(expected);
    });

    it("should handle an empty input array", () => {
        //Arrange
        const EMPTY_ARRAY = [];
        const expected = [];

        //Act
        const longWordsFromEmptyArray = getLongWords(EMPTY_ARRAY);

        //Assert
        expect(longWordsFromEmptyArray).toEqual(expected);
    });

    it("should handle an array with mixed length words", () => {
        //Arrange
        const MIXED_LENGTH_WORDS = ["short", "tiny", "adequate", "sufficient"];
        const expected = ["short", "adequate", "sufficient"];

        //Act
        const longWordsFromMixedArray = getLongWords(MIXED_LENGTH_WORDS);

        //Assert
        expect(longWordsFromMixedArray).toEqual(expected);
    });
});
