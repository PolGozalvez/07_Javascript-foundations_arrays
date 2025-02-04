import { describe, it, expect } from "vitest";
import getEvensOnly from "./getEvensOnly.js"

describe("getEvensOnly", () => {
    it("should return only even numbers from the array", () => {
        //Arrange
        const NUMBERS = [2, 25, 43, 12, 67, 42, 28];
        const expected = [2, 12, 42, 28];

        //Act
        const evenNumbers = getEvensOnly(NUMBERS);

        //Assert
        expect(evenNumbers).toEqual(expected);
    });

    it("should handle an empty array", () => {
        //Arrange
        const EMPTY_NUMBERS_LIST = [];
        const expected = [];

        //Act
        const emptyEvenNumbers = getEvensOnly(EMPTY_NUMBERS_LIST);

        //Assert
        expect(emptyEvenNumbers).toEqual(expected);
    });

    it("should handle an array with no even numbers", () => {
        //Arrange
        const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];
        const expected = [];

        //Act
        const noEvenNumbers = getEvensOnly(NUMBERS_LIST_WITHOUT_EVEN_VALUES);

        //Assert
        expect(noEvenNumbers).toEqual(expected);
    });

    it("should handle an array with all even numbers", () => {
        //Arrange
        const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];
        const expected = [2, 4, 6, 8, 10];

        //Act
        const allEvenNumbers = getEvensOnly(NUMBERS_LIST_WITH_ALL_EVEN_VALUES);

        //Assert
        expect(allEvenNumbers).toEqual(expected);
    });

    it("should handle an array with negative even numbers", () => {
        //Arrange
        const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];
        const expected = [-2, -4, -6, -8, -10];

        //Act
        const allNegativeEvenNumbers = getEvensOnly(NUMBERS_LIST_WITH_NEGATIVE_VALUES);

        //Assert
        expect(allNegativeEvenNumbers).toEqual(expected);
    });

    it("should handle an array with mixed positive and negative even numbers", () => {
        //Arrange
        const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];
        const expected = [4, -6, 8, -10];

        //Act
        const mixedEvenNumbers = getEvensOnly(NUMBERS_LIST_WITH_MIXED_VALUES);

        //Assert
        expect(mixedEvenNumbers).toEqual(expected);
    });
});
