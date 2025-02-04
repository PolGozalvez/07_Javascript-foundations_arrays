import { describe, it, expect } from "vitest";
import extractVipsNames from "./extractVipsNames.js";

describe("extractVipsNames", () => {
    it("should extract names from VIPS array", () => {
        //Arrange
        const VIPS = [
            { name: "Foo", age: 80 },
            { name: "Bar", age: 2 },
            { name: "Fizz", age: 5 },
            { name: "Buzz", age: 16 },
            { name: "FizzBuzz", age: 100 },
          ];
        const expected = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

        //Act
        const extractNamefromVipsArray = extractVipsNames(VIPS);

        //Assert
        expect(extractNamefromVipsArray).toEqual(expected);
    });

    it("should handle an empty array", () => {
        //Arrange
        const EMPTY_VIPS_LIST = [];
        const expected = [];

        //Act
        const extractNamefromEmptyArray = extractVipsNames(EMPTY_VIPS_LIST);

        //Assert
        expect(extractNamefromEmptyArray).toEqual(expected);
    });

    it("should handle an array with one VIP", () => {
        //Arrange
        const SINGLE_VIP_LIST = [{ name: "Foo", age: 80 }];
        const expected = ["Foo"];

        //Act
        const extractNamefromSingleVipArray = extractVipsNames(SINGLE_VIP_LIST);

        //Assert
        expect(extractNamefromSingleVipArray).toEqual(expected);
    });

    it("should handle VIPs with different ages", () => {
        //Arrange
        const VIPS_WITH_DIFFERENT_AGES = [
            { name: "Foo", age: 80 },
            { name: "Bar", age: 2 },
            { name: "Fizz", age: 5 },
            { name: "Buzz", age: 16 },
            { name: "FizzBuzz", age: 100 },
          ];
        const expected = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

        //Act
        const extractNamefromDifferentAgesArray = extractVipsNames(VIPS_WITH_DIFFERENT_AGES);

        //Assert
        expect(extractNamefromDifferentAgesArray).toEqual(expected);
    });
});
