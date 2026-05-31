let inputslider = document.getElementById("inputslider");
let sliderValue = document.getElementById ("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");

//showing input slider value
sliderValue.textContent = inputslider.value;
inputslider.addEventListener('input', ()=>{
  sliderValue.textContent = inputslider.value;
});

genBtn.addEventListener('click', ()=>{
  passBox.value = generatePassword();
})
 
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklhmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbol = "~!@#$%^&*";



// Function to generate Password
function generatePassword(){
  let genPassword = "";
  let allChars = "";


  genPassword = upperChars.charAt(Math.random() * upperchars.length);
  return genPassword;
}