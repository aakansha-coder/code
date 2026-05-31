// function countVowels(str) {
//     let count = 0;
//    for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;

// }
// let num = [67, 92, 39];
// let newArr = num.filter((val)) => {
//     return val %2 === 0;
// }

// let n = prompt("Enter a number");
// let arr = [];
// for(let i=1; i<n; i++) {
// arr [i - 1] = i;
// }
//  console.log(arr);
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("sum",sum);
// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("factorial=", factorial);

let modeBtn = document.querySelector("#mode");
let currMode = "Light";

modeBtn.addEventListener("click", () => {
  if(currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "yellow";
  }  else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "Green";
  }
     console.log(currMode);
});