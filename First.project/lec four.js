// // // class ToyotaCar  {
// // //   constructor() {
// // //     console.log("creating a car");
// // //   }
// // //   start() {
// // //     console.log("start");
// // //   }
// // //   stop() {
// // //    console.log("stop");
// // //   }

// // //   setbrand(brand) {
// // //     this.brandName = brand;
// // //   }

// // // }

// // // let fortuner = new ToyotaCar();
// // // fortuner.setbrand("fortuner");
// // // let Lexus = new ToyotaCar();
// // // Lexus.setbrand("Lexus");
// // // let Inova = new  ToyotaCar();
// // // Inova.setbrand("Inova");

// class Person {
//   constructor() {
//        console.log("enter parents constructor");
//     this.species = "homo sapiens";
//   }
//   eat () {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }

//   work() {
//     console.log("do nothing");
//   }
// }
 
// class Engineer extends Person {
//   constructor(branch) {
//         console.log("enter child constructor");
//     super(); // to invoke parent class constration
//     this.branch = branch;
//     console.log("enter child constructor");
//   }
//   work() {
//     console.log("solve problem,build something");
//   } //ye wali hogi
  
// }

// class Aakansha extends Person {
//   constructor(human) {
//     super();
//     this.human = human;
//    }
//    work() {
//     console.log("beauti with brain");
//    }
// }

// class Doctor extends Person {
//   constructor(General_physician) {
//     super();
//     this.General_physician = General_physician;
//   }
  
//   work () {
//     console.log("treat patients");
//   }
// } 
//   class Teacher extends Person {
//     constructor(General_specialization) {
//       super();
//       this.General_specialization = General_specialization;
//     }
//     work () {
//       console.log("teach a student");
    
//     }
//   }

//  let shardhaObj = new Engineer(); // (ye search krna hota hai console pr)
//  let engObj = new Engineer("Mechnical engineering");

//  let drObj = new Doctor("cardiologistic");

//  let tecObj = new Teacher("maths spacialization");

//  let aakaObj = new Aakansha("reformer specialization");


// // class Aakansha {
// //   constructor () {
// //     console.log("enter perents constructor");
// //     this.species = "homo sapiens";
// //   }
// //   work() {
// //     console.log("software developer");
// //   }
// // }

// //   class Engineer extends Aakansha {
// //     constructor(branch) {
// //       super();
// //       this.branch = branch;
// //       console.log("exit child constructor");
// //     }
// //     work() {
// //       console.log("frantend developer");
// //     }
// //   }

// //   class add extends Aakansha {
// //     constructor(add) {
// //       super();
// //       this.add = add;
// //     }
// //     add() {
// //             console.log("Address");
// //     }
// //   }

// //     class bloodgroup extends Aakansha {
// //       constructor(bloodgroup) {
// //         super();
// //         this.bloodgroup = bloodgroup;
// //       }
  
// //       bloodgroup() {
// //         console.log("bloodgroup");
// //       }
// //     }
// //       class mob extends Aakansha {
// //     constructor(mob) {
// //       super();
// //       this.mob = mob;
// //     }
// //     mob() {
// //       console.log("phone number");
// //     }
// //   }
    

// //     let mobObj = new mob(8493226747);
// //     let addObj = new add("Transport nagar");
// //     let bloodgroupObj = new bloodgroup("B+");
// //     let engObj = new Engineer("software developer");
  
    