import { describe, it, expect } from "vitest";
import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js"

describe("extractCountriesWithFiveCharactersOrFewer", () => {
    it("should return countries with five characters or fewer", () => {
        //Arrange
        const COUNTRIES_WITH_MIXED_LENGTH = [
            "United Kingdom",
            "Italy",
            "France",
            "Portugal",
            "Greece",
        ];
        const expected = [
            "Italy",
        ];

        //Act
        const countriesFiveOrFewer = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_MIXED_LENGTH);

        //Assert
        expect(countriesFiveOrFewer).toEqual(expected);
    });

    it("should handle an empty array of countries", () => {
        //Arrange
        const EMPTY_COUNTRIES_ARRAY = [];
        const expected = [];

        //Act
        const emptyArrayOfCountries = extractCountriesWithFiveCharactersOrFewer(EMPTY_COUNTRIES_ARRAY);

        //Assert
        expect(emptyArrayOfCountries).toEqual(expected);
    });

    it("should handle an array with no countries having five characters or fewer", () => {
        //Arrange
        const COUNTRIES_WITH_NO_SHORT_NAMES = ["United Kingdom", "Portugal", "Greece"];
        const expected = [];

        //Act
        const noCountriesFiveOrFewer = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_NO_SHORT_NAMES);

        //Assert
        expect(noCountriesFiveOrFewer).toEqual(expected);
    });

    it("should handle an array with all countries having five characters or fewer", () => {
        //Arrange
        const COUNTRIES_WITH_ALL_SHORT_NAMES = ["Italy", "Spain", "Japan"];
        const expected = ["Italy", "Spain", "Japan"];

        //Act
        const noCountriesFiveOrFewer = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_ALL_SHORT_NAMES);

        //Assert
        expect(noCountriesFiveOrFewer).toEqual(expected);
    });
});
