alert('WELCOME TO OUR CALCULATOR')
let prompt1 = prompt("Please enter the first number");
let num1 = Number(prompt1);
let prompt2 = prompt("Please enter the operator( + - / *)");
let sign = prompt2;
let prompt3 = prompt("Please enter the second number");
let num2 = Number(prompt3);
let answer;

if(sign == "+"){ answer = num1+num2}
if(sign == "-"){ answer = num1-num2}
if(sign == "/"){ answer = num1/num2}
if(sign == "*"){ answer = num1*num2}
document.write(answer);
alert("Hey your answer is" + " " + answer);


