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
}















