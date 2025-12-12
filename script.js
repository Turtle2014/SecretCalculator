
function clearScreen(){
  document.getElementById("secret-result").value = "";
}

function display(secret_number){
  document.getElementById("secret-result").value += secret_number;
  
  
}

function operator(secret_op){

   document.getElementById("secret-result").value += secret_op;
  
  
  
  
}



function calculate(){
let secret_equate = document.getElementById("secret-result").value
let secret_parts = secret_equate.split(/([+\-*/])/);
let num1 = secret_parts[0];
let op = secret_parts[1];
let num2 = secret_parts[2];

let result = eval(secret_equate);
document.getElementById("secret-result").value = result;
}
