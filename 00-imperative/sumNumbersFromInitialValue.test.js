import { describe, it, expect } from "vitest";
import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js"

const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;

describe("sumNumbersFromInitialValue", () => {
    it("should return the correct sum with initial value 0", () => {
        //Arrange
        const expected = 15;

        //Act
        const sumWithInitialValueZero = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsZero);

        //Assert
        expect(sumWithInitialValueZero).toEqual(expected);
    });
    
    it("should return the correct sum with initial value 10", () => {
        //Arrange
        const expected = -5;

        //Act
        const sumWithInitialValueZero = sumNumbersFromInitialValue(NEGATIVE_NUMBERS_LIST, initialAccumulatedValueAsTen);

        //Assert
        expect(sumWithInitialValueZero).toEqual(expected);
    });

    it("should return the initial value if the list is empty", () => {
        //Arrange
        const EMPTY_NUMBERS_LIST = [];
        const expected = 0;

        //Act
        const sumWithInitialValueZero = sumNumbersFromInitialValue(EMPTY_NUMBERS_LIST, initialAccumulatedValueAsZero);

        //Assert
        expect(sumWithInitialValueZero).toEqual(expected);
    });

    it("should handle negative numbers in the list", () => {
        //Arrange
        const expected = -15;

        //Act
        const sumWithInitialValueZero = sumNumbersFromInitialValue(NEGATIVE_NUMBERS_LIST, initialAccumulatedValueAsZero);

        //Assert
        expect(sumWithInitialValueZero).toEqual(expected);
    });

    it("should handle a mix of positive and negative numbers", () => {
        //Arrange
        const expected = 13;

        //Act
        const sumWithInitialValueZero = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsTen);

        //Assert
        expect(sumWithInitialValueZero).toEqual(expected);
    });

    it("should handle an initial value of 0", () => {
        //Arrange
        const expected = 3;

        //Act
        const sumWithInitialValueZero = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero);

        //Assert
        expect(sumWithInitialValueZero).toEqual(expected);
    });

    it("should handle an initial value of 100", () => {
        //Arrange
        const initialAccumulatedValueAsOneHundred = 100;
        const expected = 115;

        //Act
        const sumWithInitialValueZero = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsOneHundred);

        //Assert
        expect(sumWithInitialValueZero).toEqual(expected);
    });
});
