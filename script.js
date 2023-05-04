// Write password to the #password input
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");


var pass="";

var numbers =["0","1","2","3","4","5","6","7","8","9"];
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capital = ["A","B","C","D",'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ["!","@","#","$","%","^","&","*","(",")","?","/","<",">",",",".",":",";"];

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword(){
  
  var lower = prompt("Do you want lower case letters (Y or N)");
  var upper = prompt("Do you want upper case letters (Y or N)");
  var num = prompt("Do you want numbers (Y or N)");
  var spec = prompt("Do you want special characters (Y or N)");
  var amount = prompt("between 8-128 how long do you want the password");
  var empty = [];
  if(lower == "Y" && upper == "N" && num == "N" && spec == "N"){
      empty = characters;
    }else if(lower == "N" && upper == "Y" && num == "N" && spec == "N"){
      empty = capital;
  
    }else if(lower == "N" && upper == "N" && num == "Y" && spec == "N"){
      empty = numbers;
  
    }else if(lower == "N" && upper == "N" && num == "N" && spec == "Y"){
      empty = special;
  
    }else if(lower == "Y" && upper == "Y" && num == "N" && spec == "N"){
      empty = characters.concat(capital);
   
    }else if(lower == "Y" && upper == "N" && num == "Y" && spec == "N"){
      empty = characters.concat(numbers);
  
    }else if(lower == "Y" && upper == "N" && num == "N" && spec == "Y"){
      empty = characters.concat(special);
  
    }else if(lower == "N" && upper == "Y" && num == "Y" && spec == "N"){
      empty = capital.concat(numbers);
   
    }else if(lower == "N" && upper == "Y" && num == "N" && spec == "Y"){
      empty = capital.concat(special);
   
    }else if(lower == "N" && upper == "N" && num == "Y" && spec == "Y"){
      empty = numbers.concat(special);
   
    }else if(lower == "Y" && upper == "Y" && num == "Y" && spec == "N"){
      empty = lower.concat(numbers, capital);
   
    }else if(lower == "Y" && upper == "N" && num == "Y" && spec == "Y"){
      empty = capital.concat(numbers);
    }
    else if(lower == "Y" && upper == "Y" && num == "Y" && spec == "N"){
      empty = characters.concat(capital, numbers);
    }
    else if(lower == "Y" && upper == "N" && num == "Y" && spec == "Y"){
      empty = characters.concat(special, numbers);
    }
    else if(lower == "Y" && upper == "Y" && num == "N" && spec == "Y"){
      empty = characters.concat(capital, special);
    }
    else if(lower == "N" && upper == "Y" && num == "Y" && spec == "Y"){
      empty = capital.concat(numbers, special);
    }
    else if(lower == "Y" && upper == "Y" && num == "Y" && spec== "Y"){
      empty = characters.concat(capital, special, numbers);
    }
    for(var i = 0; i<amount; i++){
    var min = 0;
    var max = empty.length;
    var random = Math.floor(Math.random() * (max+ min+1)- min);
    pass = pass + empty[random]; 
    }
    return pass;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   var amount = prompt("between 8-128 how long do you want the password");
  // }else if(lower == "Y" && upper == "N" && number == "N" && special == "N"){
  //   for(var i = 0; i<amount; i++){
    //   var min = 0;
 //   var max = 25;
 //   var random = Math.floor(Math.random() * (max+ min+1)- min);
 //   pass = pass +characters[random];
 //  }
 // }else if(lower == "N" && upper == "N" && number == "N" && special == "Y"){
 //   var amount = prompt("between 8-128 how long do you want the password");
 //   for(var i = 0; i<amount; i++){
 //   var min = 0;
 //   var max = 17;
 //   var random = Math.floor(Math.random() * (max+ min+1)- min);
 //   pass = pass +special[random];
 //  }
 // }else if(lower == "N" && upper == "Y" && number == "N" && special == "N"){
 //   var amount = prompt("between 8-128 how long do you want the password");
 //   for(var i = 0; i<amount; i++){
 //   var min = 0;
 //   var max = 25;
 //   var random = Math.floor(Math.random() * (max+ min+1)- min);
 //   pass = pass +capital[random];
 //  }
 // }else if(lower == "Y" && upper == "N" && number == "Y" && special == "N"){
 //   var amount = prompt("between 8-128 how long do you want the password");
 //   for(var i = 0; i<amount; i++){
 //   var min = 0;
 //   var max = 34;
 //   var random = Math.floor(Math.random() * (max+ min+1)- min);
 //   pass = pass +numswlower[random];
 //  }
 // }else if(lower == "Y" && upper == "Y" && number == "N" && special == "N"){
 //   var amount = prompt("between 8-128 how long do you want the password");
 //   for(var i = 0; i<amount; i++){
 //   var min = 0;
 //   var max = 34;
 //   var random = Math.floor(Math.random() * (max+ min+1)- min);
 //   pass = pass +upperlower[random];
 //  }
 // }else if(lower == "Y" && upper == "Y" && number == "N" && special == "N"){
 //   var amount = prompt("between 8-128 how long do you want the password");
 //   for(var i = 0; i<amount; i++){
 //   var min = 0;
 //   var max = 34;
 //   var random = Math.floor(Math.random() * (max+ min+1)- min);
 //   pass = pass +numspec[random];
 //  }
 // }