import {repeatWord} from './index.js';
import {getPercents} from './index.js';

describe("tests for repeatWord function", () => {
    it("should function correctly repeat words", () => {
        expect(repeatWord("слово", 3)).toBe("слово1, слово2, слово3");
        expect(repeatWord("SkillFactory", 5)).toBe("SkillFactory1, SkillFactory2, SkillFactory3, SkillFactory4, SkillFactory5");
        expect(repeatWord("слово", 0)).toBe("Введенное слово не повторяется ни разу!");
    });
});

describe("tests for getPercents function", () => {
    it("should function correctly get percents", () => {
        expect(getPercents(10, 1000)).toBe(100);
        expect(getPercents(30, 200)).toBe(60);
        expect(getPercents(0, 500)).toBe(0);
        expect(getPercents(100, 500)).toBe(500);
        expect(getPercents(50, 500)).toBe(250);
    });
});