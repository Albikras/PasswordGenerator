// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = document.getElementById("numbers");
var lowerCaseLetters = document.getElementById("lowerCaseLetters");
var upperCaseLetters = document.getElementById("upperCaseLetters");
var specialCharacters = document.getElementById("specialCharacters");
var passwordLength = document.getElementById("passwordLength");

numbers.checked = true;
lowerCaseLetters.checked = true;
upperCaseLetters.checked = true;
specialCharacters.checked = true;


var arrayNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var arrayLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayUpperCaseLetters = ["A","B","C","D",'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var arraySpecialCharacters = ["!","@","#","$","%","^","&","*","(",")","?","/","<",">",",",".",":",";"];
// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword(){
    var emptyArray = [];
    var pass=""
    if(numbers.checked === false && lowerCaseLetters.checked === false &&
    specialCharacters.checked === false && upperCaseLetters.checked === false){
        
        alert("invalid Input Please Chack One Of The Boxes!!!");
        return pass;
    }
    if(passwordLength.value<8 || passwordLength.value>128){
        alert("Invalid Input");
        return pass;
    }
    if(numbers.checked === true){
        emptyArray = emptyArray.concat(arrayNumbers);
        console.log(numbers.value);
    }
    if(lowerCaseLetters.checked === true){
        emptyArray = emptyArray.concat(arrayLowerCaseLetters);
        console.log(lowerCaseLetters.value);
    }
    if(upperCaseLetters.checked === true){
        emptyArray = emptyArray.concat(arrayUpperCaseLetters);
        console.log(upperCaseLetters.value);
    }
    if(specialCharacters.checked === true){
        emptyArray = emptyArray.concat(arraySpecialCharacters);
        console.log(specialCharacters.value);
    }
    for(var i = 0; i<passwordLength.value; i++){
        var min = 0;
        var max = emptyArray.length;
        var random = Math.floor(Math.random() * emptyArray.length);
        pass = pass + emptyArray[random]; 
        console.log(pass);
        }
        console.log(pass);
        return pass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

