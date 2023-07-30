import {Person} from "../src/age.js";

describe ("Person",() => {
    it ("should create a person class with an age value") {
        const user = new Person(25);
        expect(user.age).toBe(25);

    }
})














// describe('Age', () => {

//     it('Should correctly create an age object', () => {
//         let newAge = new Age();
//         expect(newAge.mercury).toEqual("");
//         expect(newAge.venus).toEqual("");
//         expect(newAge.mars).toEqual("");
//         expect(newAge.jupiter).toEqual("");
//     });
//     it('should return age on mercury', () => {
//         const newAge = new Age();
//         expect(newAge.returnLineArrayMercury(newAge.mercury)).toEqual(0);
//     })
// });
