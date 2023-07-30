import {Person, YearsPassed, FutureAge} from "../src/age.js";

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
        expect(user.total).toBe(10);
    })
    it ("should return years passed on mercury", () => {
        const user = new YearsPassed(25, 15, 0);
        user.mercuryPast();
        expect(user.total).toBe(2.4);
        })
    it ("should return years passed on venus", () => {
        const user = new YearsPassed(25, 15, 0);
        user.venusPast();
        expect(user.total).toBe(6.2);
        })
    it ("should return years passed on mars", () => {
        const user = new YearsPassed(25, 15, 0);
        user.marsPast();
        expect(user.total).toBe(18.799999999999997);
        })
    it ("should return years passed on jupiter", () => {
        const user = new YearsPassed(25, 15, 0);
        user.jupiterPast();
        expect(user.total).toBe(118.6);
        })
     });

describe ("FutureAge",() => {
    it ("should create a future class with a year value", () => {
        const user = new FutureAge(50, 25, 0);
        expect(user.future).toBe(50);
        expect(user.current).toBe(25);
    });
    it ("should return a year value to future year on earth", () => {
        const user = new FutureAge(50,25,0);
        user.earthFuture();
        expect(user.total).toBe(user.future - user.current);
    });
    it ("should return a year value to future year on mercury", () => {
        const user = new FutureAge(50,25,0);
        user.mercuryFuture();
        expect(user.total).toBe(6);
    });
    it ("should return a year value to future year on venus", () => {
        const user = new FutureAge(50,25,0);
        user.venusFuture();
        expect(user.total).toBe(15.5);
    });  
});







// Determines how many years have passed on each planet since a past birthday. For example, if a user is 56 and we want to calculate how many years have passed since their 43 birthday, we would find the following results:
// 13 Earth years have passed.
// 54.16 Mercury years have passed.
// 20.96 Venus years have passed.
// 6.91 Mars years have passed.
// 1.09 Jupiter years have passed