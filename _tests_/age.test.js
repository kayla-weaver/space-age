import Age from "../src/age.js";

describe('Age', () => {
    test('Should correctly create an age object', () => {
        let newAge= new Age();
        expect(newAge.mercury).toEqual("");
        expect(newAge.venus).toEqual("");
        expect(newAge.mars).toEqual("");
        expect(newAge.jupiter).toEqual("");
    });
})