export class Person {
  constructor(age){
    this.age = age;
  }

  mercury(){
    this.age = this.age * .24;
    return this.age;
  }
  venus(){
    this.age = this.age * .62;
    return this.age;
  }
  mars(){
    this.age = this.age * 1.88;
    return this.age;
  }
  jupiter(){
    this.age = this.age * 11.86;
    return this.age;
  }
}

export class YearsPassed {
    constructor(current, past, total){
    this.current = current;
    this.past  = past;
    this.total= total;
    }
    
}















