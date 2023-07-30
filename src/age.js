export class Person {
  constructor(age){
    this.age = age;
  }

  mercury(){
    this.age = this.age * .24;
    return this.age;
  }
}



















// export default class Age {
//     constructor(mercury= "", venus="", mars="", jupiter="") {
//         this.mercury = mercury;
//         this.venus = venus;
//         this.mars = mars;
//         this.jupiter =  jupiter;
//     }
//     returnLineArrayMercury(age){
//         let lineArray = [];
//         if (age === ""){
//             return lineArray*.24;
//         }else  {
//             return "meow";
//         }
//     }
//     returnLineArrayVenus(age){
//         let lineArray = [];
//         if (age === ""){
//             return lineArray*.62;
//         } else {
//             return "meow";
//         }
//     }
// }