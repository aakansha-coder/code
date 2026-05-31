// let DATA = "secret information";

// class user {
//   constructor(name, email) {
  
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("data=", DATA);
//   }
// }

// class Admin extends user {
//   constructor(name, email){
//     super(name, email); // parents k constructor ko call karne k lea super ka use krte hai
//   }
//   editData() {
//     DATA = "some new value";
//   }
// }

// let student1 = new user("aakansha", "abc@email.com");
// let student2 = new user("kajal", "dfg@email.com");
// let student3 = new user("nida", "psp@email.com");

// let Admin1 = new Admin("payal", "abs@gmail.com");

// Q1
 
// class customer {
//   constructor(name, email, address) {
//     this.name = name;
//     this.email = email;
//     this.address = address;

//   }
//   viewProduct() {
//     console.log("this.name +", "is viewing products" );
//   }
  
// }
//   class Primiumcustomer extends customer {
//     constructor(name, email, address) {
//       super(name, email, address);
//     }
//   }

//   getDiscount() {
//     console.log(this.name + "gets  special discount");
//   }

//   let cus1 = new customer("tripti", "abc@gmail.com", "meerut");

//      customer1.viewProduct();

//     let primium1 = new Primiumcustomer("riya", "nfp@gmail.com", "delhi");

//     premium1.viewProduct();
//     premium2.getDiscount();


// class student {
//   constructor(name, rollNo) {
//     console.log("parents node");
//      this.species = "homo sapiens";
//     this.name = name;
//     this.rollNo = rollNo;
//   }
//   viewResult() {
//     console.log(this.name +  "is viewing result");
//   }
// }

// class monitor extends student {
//   constructor(name, rollNo) {
//      console.log("child node");
//     super(name, rollNo);
//   }
  
//   manageclass() {
//     console.log(this.name + "is managing class");
//   }
// }

//  let stud1Obj = new student("priya", 201);
//  stud1.viewResult();
//   let monObj = new student("nida" , 101);
//   mon.viewResult();
 
  
let DATA = "secreate information";

class user {
  constructor(name, email, mob, _age) {
    this.name = name;
    this.email = email;
    this.mob = mob;
    this._age = _age;
    

  }

  viewData() {
    console.log("data = ", DATA);
  }
}

 class Admin extends user {
  constructor(name, email, mob, _age) {
    super(name, email, mob, _age); // super jab child mei construtor create krte h to parents k construtor ko call krna pdta hai
  }
  editDATA() {
    DATA = "some new value";
  }
 }


let student1 = new user("aakansha", "abc@gmail.com", 8439226747, 20, );
let student2 = new user("kajal", "vaakansha11@gmail.com", 7088546283, 21,);

let  faculty01 = new user("Dean", "dean@gmail.com");

let admin0 = new user("admin", "admin@gmail.com");