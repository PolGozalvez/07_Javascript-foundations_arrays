import { describe, it, expect } from "vitest";
import extendUsersSettings from "./extendUsersSettings.js";

describe("extendUsersSettings", () => {
    it("should add id and isEnabled properties to each user", () => {
        //Arrange
        const USERS = [
            {
                email: "lindsay.ferguson@reqres.in",
                firstName: "Lindsay",
                lastName: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg",
            },
            {
                email: "michael.lawson@reqres.in",
                firstName: "Michael",
                lastName: "Ferguson",
                avatar: "https://reqres.in/img/faces/8-image.jpg",
            },
            {
                email: "tobias.funke@reqres.in",
                firstName: "Tobias",
                lastName: "Funke",
                avatar: "https://reqres.in/img/faces/9-image.jpg",
            },
        ];
        const expected = [
            {
                email: "lindsay.ferguson@reqres.in",
                firstName: "Lindsay",
                lastName: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg",
                id: 0,
                isEnabled: true
            },
            {
                email: "michael.lawson@reqres.in",
                firstName: "Michael",
                lastName: "Ferguson",
                avatar: "https://reqres.in/img/faces/8-image.jpg",
                id: 1,
                isEnabled: true
            },
            {
                email: "tobias.funke@reqres.in",
                firstName: "Tobias",
                lastName: "Funke",
                avatar: "https://reqres.in/img/faces/9-image.jpg",
                id: 2,
                isEnabled: true
            },
        ];

        //Act
        const addNewPropertiestoUser = extendUsersSettings(USERS);

        //Assert
        expect(addNewPropertiestoUser).toEqual(expected);
    });

    it("should handle an empty array", () => {
        //Arrange
        const expected = [];

        //Act
        const addNewPropertiestoUser = extendUsersSettings();

        //Assert
        expect(addNewPropertiestoUser).toEqual(expected);
    });
});
