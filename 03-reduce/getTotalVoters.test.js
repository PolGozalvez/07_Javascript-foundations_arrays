import { describe, it, expect } from "vitest";
import getTotalVoters from "./getTotalVoters.js";

describe("getTotalVoters", () => {
    it("should return the correct number of voters", () => {
        //Arrange
        const VOTERS = [
            { name: "Bob", age: 30, hasVoted: true },
            { name: "Jake", age: 32, hasVoted: true },
            { name: "Kate", age: 25, hasVoted: false },
            { name: "Sam", age: 20, hasVoted: false },
            { name: "Phil", age: 21, hasVoted: true },
            { name: "Ed", age: 55, hasVoted: true },
            { name: "Tami", age: 54, hasVoted: true },
            { name: "Mary", age: 31, hasVoted: false },
            { name: "Becky", age: 43, hasVoted: false },
            { name: "Joey", age: 41, hasVoted: true },
            { name: "Jeff", age: 30, hasVoted: true },
            { name: "Zack", age: 19, hasVoted: false },
          ];
        const expected = 7;

        //Act
        const correctNumberOfVoters = getTotalVoters(VOTERS);

        //Assert
        expect(correctNumberOfVoters).toEqual(expected);
    });

    it("should return 0 when no one has voted", () => {
        //Arrange
        const NO_VOTERS = [
            { name: "Kate", age: 25, hasVoted: false },
            { name: "Sam", age: 20, hasVoted: false },
            { name: "Mary", age: 31, hasVoted: false },
            { name: "Becky", age: 43, hasVoted: false },
            { name: "Zack", age: 19, hasVoted: false },
          ]; 
        const expected = 0;

        //Act
        const noVoters = getTotalVoters(NO_VOTERS);

        //Assert
        expect(noVoters).toEqual(expected);
    });

    it("should return the correct number when all have voted", () => {
        //Arrange
        const ALL_VOTERS = [
            { name: "Bob", age: 30, hasVoted: true },
            { name: "Jake", age: 32, hasVoted: true },
            { name: "Phil", age: 21, hasVoted: true },
            { name: "Ed", age: 55, hasVoted: true },
            { name: "Tami", age: 54, hasVoted: true },
            { name: "Joey", age: 41, hasVoted: true },
            { name: "Jeff", age: 30, hasVoted: true },
          ];
        const expected = 7;

        //Act
        const allVoters = getTotalVoters(ALL_VOTERS);

        //Assert
        expect(allVoters).toEqual(expected);
    });

    it("should handle an empty array", () => {
        //Arrange
        const EMPTY_VOTERS = [];
        const expected = 0;

        //Act
        const emptyVoters = getTotalVoters(EMPTY_VOTERS);

        //Assert
        expect(emptyVoters).toEqual(expected);
    });

    it("should handle an array with one voter who has voted", () => {
        //Arrange
        const SINGLE_VOTER = [{ name: 'Bob', age: 30, hasVoted: true }];
        const expected = 1;

        //Act
        const sinlgeVoters = getTotalVoters(SINGLE_VOTER);

        //Assert
        expect(sinlgeVoters).toEqual(expected);
    });

    it("should handle an array with one voter who has not voted", () => {
        //Arrange
        const SINGLE_NON_VOTER = [{ name: "Kate", age: 25, hasVoted: false }];
        const expected = 0;

        //Act
        const noOneVoters = getTotalVoters(SINGLE_NON_VOTER);

        //Assert
        expect(noOneVoters).toEqual(expected);
    });
});
