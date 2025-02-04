import { describe, it, expect } from "vitest";
import customersWhoBelongToMembership from "./customersWhoBelongToMembership.js"

describe("customersWhoBelongToMembership", () => {
    it("should return only customers who are members", () => {
        //Arrange
        const CUSTOMERS_LIST = [
            { name: "Foo", isMember: true },
            { name: "Bar", isMember: false },
            { name: "Fizz", isMember: true },
            { name: "Buzz", isMember: false },
            { name: "FizzBuzz", isMember: true },
        ];
        const expected = [
            { name: "Foo", isMember: true },
            { name: "Fizz", isMember: true },
            { name: "FizzBuzz", isMember: true },
        ];

        //Act
        const onlyCustomersMembers = customersWhoBelongToMembership(CUSTOMERS_LIST);

        //Assert
        expect(onlyCustomersMembers).toEqual(expected);
    });
    it("should handle an empty array", () => {
        //Arrange
        const EMPTY_CUSTOMERS_LIST = [];
        const expected = [];

        //Act
        const emptyCustomersMembersArray = customersWhoBelongToMembership(EMPTY_CUSTOMERS_LIST);

        //Assert
        expect(emptyCustomersMembersArray).toEqual(expected);
    });

    it("should handle an array with no members", () => {
        //Arrange
        const CUSTOMERS_LIST_WITH_NO_MEMBERS = [
            { name: "Bar", isMember: false },
            { name: "Buzz", isMember: false },
        ];
        const expected = [];

        //Act
        const noCustomersMembersArray = customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_NO_MEMBERS);

        //Assert
        expect(noCustomersMembersArray).toEqual(expected);
    });

    it("should handle an array with all members", () => {
        //Arrange
        const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [
            { name: "Foo", isMember: true },
            { name: "Fizz", isMember: true },
            { name: "FizzBuzz", isMember: true },
        ];
        const expected = [
            { name: "Foo", isMember: true },
            { name: "Fizz", isMember: true },
            { name: "FizzBuzz", isMember: true },
        ];

        //Act
        const allCustomersMembersArray = customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_ALL_MEMBERS);

        //Assert
        expect(allCustomersMembersArray).toEqual(expected);
    });
});
