import {Person} from "../src/age.js";

describe ("Person",() => {
    it ("should create a person class with an age value", () => {
        const user = new Person(25);
        expect(user.age).toBe(25);
     });
     it ("should return mercury age at current value", () => {
        const user = new Person(25);  
        user.mercury();
        expect(user.age).toBe(6);
});
})




// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determines how many years have passed on each planet since a past birthday. For example, if a user is 56 and we want to calculate how many years have passed since their 43 birthday, we would find the following results:










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
