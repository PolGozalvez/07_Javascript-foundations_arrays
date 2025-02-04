import { describe, it, expect } from "vitest";
import createLocalesSettings from "./createLocalesSettings.js";

describe("createLocalesSettings", () => {
    it("should create locales settings with the first locale enabled and the rest disabled", () => {
        //Arrange
        const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
        const expected = {
            "EN": {id: 0, enabled: true},
            "GR": {id: 1, enabled: false},
            "FR": {id: 2, enabled: false},
            "IT": {id: 3, enabled: false},
            "PT": {id: 4, enabled: false},
        };

        //Act
        const localesSettingsFistEnable = createLocalesSettings(LOCALES);

        //Assert
        expect(localesSettingsFistEnable).toEqual(expected);
    });

    it("should handle an empty array", () => {
        //Arrange
        const EMPTY_LOCALES = [];
        const expected = {};

        //Act
        const localesSettingsEmpty = createLocalesSettings(EMPTY_LOCALES);

        //Assert
        expect(localesSettingsEmpty).toEqual(expected);
    });

    it("should handle an array with one locale", () => {
        //Arrange
        const SINGLE_LOCALE = ["EN"];
        const expected = {
            "EN": {id: 0, enabled: true},
        };

        //Act
        const localesSettingsSingle = createLocalesSettings(SINGLE_LOCALE);

        //Assert
        expect(localesSettingsSingle).toEqual(expected);
    });

    it("should handle an array with duplicate locales", () => {
        //Arrange
        const DUPLICATE_LOCALES = ["EN", "EN", "FR", "FR"];
        const expected = {
            "EN": {id: 0, enabled: true},
            "EN": {id: 1, enabled: false},
            "FR": {id: 2, enabled: false},
            "FR": {id: 3, enabled: false},
        };

        //Act
        const localesSettingsDuplicate = createLocalesSettings(DUPLICATE_LOCALES);

        //Assert
        expect(localesSettingsDuplicate).toEqual(expected);
    });
});
