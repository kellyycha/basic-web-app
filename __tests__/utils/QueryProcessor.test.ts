import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "kcha"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 5 multiplied by 2?")).toEqual("10");
        expect(QueryProcessor("What is 12 multiplied by 1?")).toEqual("12");
    });

    test('should find largest numbers', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 1, 2, 3?")).toEqual("3");
        expect(QueryProcessor("Which of the following numbers is the largest: 6, 4, 1?")).toEqual("6");
    });
});