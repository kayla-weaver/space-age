import {Person} from "../src/age.js";
import {YearsPassed} from "../src/age.js";

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
     it ("should return venus age at current value", () => {
    const user = new Person(25);  
    user.venus();
    expect(user.age).toBe(15.5);
});
     it ("should return mars age at current value", () => {
    const user = new Person(25);  
    user.mars();
    expect(user.age).toBe(47);
});
it ("should return jupiter age at current value", () => {
    const user = new Person(25);  
    user.jupiter();
    expect(user.age).toBe(296.5);
});
})

describe ("YearsPassed",() => {
    it ("should create a YearsPassed class with value of years passed", () => {
        const user = new YearsPassed(25, 15, 0);
        expect(user.current).toBe(25);
        expect(user.past).toBe(15);
    })
    it ("should return years passed on earth", () => {
        const user = new YearsPassed(25, 15, 0);
        user.earthPast();
        expect(user.total).toBe(user.current - user.past);
    })
    it ("should return years passed on mercury", () => {
        const user = new YearsPassed(25, 15, 0);
        user.mercuryPast();
        expect(user.total).toBe((user.current - user.past) * .24);
        })
        it ("should return years passed on venus", () => {
            const user = new YearsPassed(25, 15, 0);
            user.venusPast();
            expect(user.total).toBe((user.current - user.past) * .62);
            })

     });







// Determines how many years have passed on each planet since a past birthday. For example, if a user is 56 and we want to calculate how many years have passed since their 43 birthday, we would find the following results:
// 13 Earth years have passed.
// 54.16 Mercury years have passed.
// 20.96 Venus years have passed.
// 6.91 Mars years have passed.
// 1.09 Jupiter years have passed