import { describe, it, expect } from "vitest";
import feedMonkeys from "./feedMonkeys.js";

const MONKEYS_LIST = ["🐒", "🦍", "🦧"];

describe("feedMonkeys", () => {
    it("should feed monkeys with bananas", () => {
        //Arrange
        const expected = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];
        const banana = "🍌";

        //Act
        const monkeyListWithBananas = feedMonkeys(MONKEYS_LIST, banana);

        //Assert
        expect(monkeyListWithBananas).toEqual(expected);
    });

    it("should feed monkeys with apples", () => {
        //Arrange
        const expected = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];
        const apple = "🍎";

        //Act
        const monkeyListWithApples = feedMonkeys(MONKEYS_LIST, apple);

        //Assert
        expect(monkeyListWithApples).toEqual(expected);
    });

    it("should feed monkeys with grapes", () => {
        //Arrange
        const expected = ["🐒 🍇", "🦍 🍇", "🦧 🍇"];
        const grape = "🍇";

        //Act
        const monkeyListWithGrapes = feedMonkeys(MONKEYS_LIST, grape);

        //Assert
        expect(monkeyListWithGrapes).toEqual(expected);
    });

    it("should return an empty array if no fruit is provided", () => {
        //Arrange
        const expected = [];

        //Act
        const monkeyListEmpty = feedMonkeys(MONKEYS_LIST);

        //Assert
        expect(monkeyListEmpty).toEqual(expected);
    });

    it("should handle feeding monkeys with special characters", () => {
        //Arrange
        const expected = ["🐒 🍉🍇", "🦍 🍉🍇", "🦧 🍉🍇"];
        const specialCharacters = "🍉🍇";

        //Act
        const monkeyListWithSpecialCharacters = feedMonkeys(MONKEYS_LIST, specialCharacters);

        //Assert
        expect(monkeyListWithSpecialCharacters).toEqual(expected);
    });
});
