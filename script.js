let num1 = 0

function clearScreen(){
  document.getElementById("secret-result").value = "";
}

function display(secret_number){
  document.getElementById("secret-result").value += secret_number;
  
  
}

function operator(secret_op){
   num1 =  document.getElementById("secret-result").value;
   document.getElementById("secret-result").value += secret_op;
  
  
  
  
}



function calculate(){
console.log(num1)
