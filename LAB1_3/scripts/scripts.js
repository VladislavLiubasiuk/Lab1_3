
let a = "Error awesome!";
let b = "Be";
let c = "strong!";

function Declaration(text_to_fix, fix){
  let correct_result = text_to_fix.replace("Error",fix);
  alert(correct_result);
} // loads the moment when the program start (or before any code can run)

let Expression = function(first_part, second_part){
  correct_result = b + " " + c;
  console.log(correct_result);
} //loads only when interpreter reache it

Declaration(a,b);
Expression(b,c);

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function Default(a=5,b=15){
  console.log(result = a + b);
}
 Default();

 ////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////

function Massive(box,of,stuff){
  console.log(arguments[0]);
  console.log(arguments[2]);
}
Massive("stuff","to","look");

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function Check_if_real(num1,num2,num3){
  if(typeof(num1) == "number" && typeof(num3) != "string"){
    console.log("DONE")
  }
  else{
    console.log("X_X");
  }
}
Check_if_real(234,65,666);
