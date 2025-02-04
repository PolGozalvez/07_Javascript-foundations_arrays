import { describe, it, expect } from "vitest";
import transformSecondsToWords from "./transformSecondsToWords.js";

describe("transformSecondsToWords", () => {
    it("should transform an array of seconds to an array of strings", () => {
        //Arrange
        const SECONDS = [2, 5, 100];
        const expected = ["2", "5", "100",];

        //Act
        const transformArraySecondsToString = transformSecondsToWords(SECONDS);

        //Assert
        expect(transformArraySecondsToString).toEqual(expected);
    });

    it("should handle an empty array", () => {
        //Arrange
        const EMPTY_SECONDS_LIST = [];
        const expected = [];

        //Act
        const transformArrayEmptyToString = transformSecondsToWords(EMPTY_SECONDS_LIST);

        //Assert
        expect(transformArrayEmptyToString).toEqual(expected);
    });

    it("should handle an array with one element", () => {
        //Arrange
        const SINGLE_SECOND_LIST = [42];
        const expected = ["42"];

        //Act
        const transformArraySingleToString = transformSecondsToWords(SINGLE_SECOND_LIST);

        //Assert
        expect(transformArraySingleToString).toEqual(expected);
    });

    it("should handle an array with zero", () => {
        //Arrange
        const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];
        const expected = ["0"];

        //Act
        const transformArrayZeroToString = transformSecondsToWords(SINGLE_SECONDS_LIST_WITH_VALUE_ZERO);

        //Assert
        expect(transformArrayZeroToString).toEqual(expected);
    });

    it("should handle an array with negative numbers", () => {
        //Arrange
        const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];
        const expected = ["-1", "-60", "-3600"];

        //Act
        const transformArrayZeroToString = transformSecondsToWords(SECONDS_LIST_WITH_NEGATIVE_VALUES);

        //Assert
        expect(transformArrayZeroToString).toEqual(expected);
    });
});
