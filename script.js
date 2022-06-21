var first = prompt("Enter the first number");
var second = prompt("Enter the second number");
var insert = prompt("Enter your preferred operator(+,-,*,/)");
var sum = Number(first) + Number(second);
var multiply = Number(first) * Number(second);
var subtract = Number(first) - Number(second);
var divide = Number(first) / Number(second);
function total(){
    if(insert === "+"){
     alert("Your result is : " + sum);
    } else if(insert === "-"){
        alert("Your result is : " + subtract);
    }else if(insert === "*"){
        alert("Your result is : " + multiply);
    }else if(insert === "/"){
        alert("Your result is : " + divide);
    } else{
        alert("Invalid operator Inputed")
    }
}
total();