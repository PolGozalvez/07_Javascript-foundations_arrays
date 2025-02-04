import { describe, it, expect } from "vitest";
import capitalizeMates from "./capitalizeNames.js";

describe("capitalizeMates", () => {
    it("should capitalize all names in the array", () => {
        //Arrange
        const NAMES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
        const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];

        //Act
        const capitalizeFirstLetterArrayNames = capitalizeMates(NAMES);

        //Assert
        expect(capitalizeFirstLetterArrayNames).toEqual(expected);
    });

    it("should handle an empty array", () => {
        //Arrange
        const EMPTY_NAMES_LIST = [];
        const expected = [];

        //Act
        const capitalizeFirstLetterArrayEmpty = capitalizeMates(EMPTY_NAMES_LIST);

        //Assert
        expect(capitalizeFirstLetterArrayEmpty).toEqual(expected);
    });

    it("should handle names that are already capitalized correctly", () => {
        //Arrange
        const CAPITALIZED_NAMES = ["John", "Jacob", "Jingleheimer", "Schmidt"];
        const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];

        //Act
        const capitalizeFirstLetterArrayCapitalized = capitalizeMates(CAPITALIZED_NAMES);

        //Assert
        expect(capitalizeFirstLetterArrayCapitalized).toEqual(expected);
    });

    it("should handle names that are all uppercase", () => {
        //Arrange
        const UPPERCASED_NAMES = ["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"];
        const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];

        //Act
        const capitalizeFirstLetterArrayUppercased = capitalizeMates(UPPERCASED_NAMES);

        //Assert
        expect(capitalizeFirstLetterArrayUppercased).toEqual(expected);
    });

    it("should handle names that are all lowercase", () => {
        //Arrange
        const LOWERCASED_NAMES = ["john", "jacob", "jingleheimer", "schmidt"];
        const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];

        //Act
        const capitalizeFirstLetterArrayLowercased = capitalizeMates(LOWERCASED_NAMES);

        //Assert
        expect(capitalizeFirstLetterArrayLowercased).toEqual(expected);
    });

    it("should handle names with mixed casing", () => {
        //Arrange
        const MIXED_CAPITALIZED_NAMES = ["jOhN", "JaCoB", "jInGlEhEiMeR", "sChMiDt"];
        const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];

        //Act
        const capitalizeFirstLetterArrayMixed = capitalizeMates(MIXED_CAPITALIZED_NAMES);

        //Assert
        expect(capitalizeFirstLetterArrayMixed).toEqual(expected);
    });
});
