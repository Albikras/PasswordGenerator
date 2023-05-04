var generateBtn = document.querySelector("#generate");//grabs the value from the id="generate" in html using a querySelctor and declares a new variable generateBtn and set it equal to that value

var numbers = document.getElementById("numbers");//declares a new variable numbers and sets it equal to the html value of numbers which was an id declared earlier
var lowerCaseLetters = document.getElementById("lowerCaseLetters");//declares a new variable lowerCaseLetters and sets it equal to the html value of lowerCaseLetters which was an id declared earlier
var upperCaseLetters = document.getElementById("upperCaseLetters");//declares a new variable upperCaseLetters and sets it equal to the html value of upperCaseLetters which was an id declared earlier
var specialCharacters = document.getElementById("specialCharacters");//declares a new variable specialCharacters and sets it equal to the html value of specailCharacters which was an id declared earlier
var passwordLength = document.getElementById("passwordLength");//declares a new variable passwordLength and sets it equal to the html value of passwordLength which was an id declared earlier

numbers.checked = true;//this is for the checkbox setting them all to be checked by default and also giving them a boolean value that is equal to true to the variable numbers
lowerCaseLetters.checked = true;//this is for the checkbox setting them all to be checked by default and also giving them a boolean value that is equal to true to the variable lowerCaseLetters
upperCaseLetters.checked = true;//this is for the checkbox setting them all to be checked by default and also giving them a boolean value that is equal to true to the variable upperCaseLetters
specialCharacters.checked = true;//this is for the checkbox setting them all to be checked by default and also giving them a boolean value that is equal to true to the variable specialCharacters


var arrayNumbers = ["0","1","2","3","4","5","6","7","8","9"];//declares a varible arrayNumbers sets it equal to an array of numbers having 10 elements within it
var arrayLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//declares the variable arrayLowerCaseLetters sets it equal to an array of the alphabet all lowercase with 26 elements
var arrayUpperCaseLetters = ["A","B","C","D",'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//declares a variable arrayUpperCaseLetters sets it equal to an array of the alphabet all upper case with 26 elements
var arraySpecialCharacters = ["!","@","#","$","%","^","&","*","(",")","?","/","<",">",",",".",":",";"];//declares a variable arraySpecialCharacters sets it equal to an array of special characters having 18 elements


function writePassword() {//declares a function writePassword
    var password = generatePassword();//declares new variable password sets it equal to function generatePassword
    var passwordText = document.querySelector("#password");//decalres new variable passwordText sets it equal to value from html with the id of password

    passwordText.value = password;//sets the value of variable passwordText equal to the value of variable of password
}


function generatePassword(){//declares function with the name of generatePassword
    var emptyArray = [];//declares new variable emptyArray and sets it equal to an empty array
    var pass=""//declares new variable pass and sets it equal to and empty string 
    if(numbers.checked === false && lowerCaseLetters.checked === false &&
    specialCharacters.checked === false && upperCaseLetters.checked === false){//added an if statement with the conditions stating if all the checkboxes values are equal to false(unchecked) then the user would go through this ir statement
        
        alert("invalid Input Please Chack One Of The Boxes!!!");//alert function used to tell the user they have place an invalid input
        return pass;//using the statement return to end the function here and return the variable pass that way the textbox does write undefined
    }
    if(passwordLength.value<8 || passwordLength.value>128){//added an if statement with the condidtions stating if the value of password length inputed by the user is less then 8 or more then 128 they will go through this block of code
        alert("Invalid Input Please Enter A Number Between 8 And 128");//alert function used to tell the user they have entered an invalid input
        return pass;//using the statement return to end the function here and return the variable pass that way the textbox does write undefined
    }
    if(numbers.checked === true){//added an if statment with the conditions if the varible numbers is equal to true(checked) then it will go through this if block of code
        emptyArray = emptyArray.concat(arrayNumbers);//sets variable emptyArray equal to the combination of variable emptyArray and variable arrayNumbers using the concat function
    }
    if(lowerCaseLetters.checked === true){//added an if statment with the conditions if the lowerCaseLetters is equal to true(checked) then it will go through this if block of code
        emptyArray = emptyArray.concat(arrayLowerCaseLetters);//sets variable emptyArray equal to the combination of variable emptyArray and variable arrayLowerCaseLetters using the concat function
    }
    if(upperCaseLetters.checked === true){//added an if statment with the conditions if the upperCaseLetters is equal to true(checked) then it will go through this if block of code
        emptyArray = emptyArray.concat(arrayUpperCaseLetters);//sets variable emptyArray equal to the combination of variable emptyArray and variable arrayUpperCaseLetters using the concat function
    }
    if(specialCharacters.checked === true){//added an if statment with the conditions if the specialCharacters is equal to true(checked) then it will go through this if block of code
        emptyArray = emptyArray.concat(arraySpecialCharacters);//sets variable emptyArray equal to the combination of variable emptyArray and variable arraySpecialCharacters using the concat function
    }
    for(var i = 0; i<passwordLength.value; i++){//added a for loop which declares a new variable i and sets it equal 0, places i under the condition i have to be less then the value of variable of passwordLength and then  sets i to be added by 1
        var random = Math.floor(Math.random() * emptyArray.length);
        /*declares new variable random sets it equal to the function Math.floor(), and inside that fuinction is Math.randomn which is multiplied the variable emptyArray.length
        Math.floor() rounds a number down to a whole number and Math.random() grabs a random value between 0 and 1*/

        pass = pass + emptyArray[random];//sets varible pass equal to variable pass added with the variable emptyArray[random] 
        }
        return pass;//returns the new value of pass to the original function writePassword

}


generateBtn.addEventListener("click", writePassword);//variable generateBtn is lsitneing for an event thought addEventListner with the conditions on click and on click will sen to function writePassword

