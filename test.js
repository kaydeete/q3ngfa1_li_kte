var num1 = prompt("First input: ");
var num2 = prompt("Second Input: ");

document.write
(
    "You have entered: <br>" +
    "First Input: " + num1 + "<br>" +
    "Second Input: " + num2 + "<br><br>"
);

document.write("Operators <br><br>");

document.write("i. Arithmetic: <br>");
var sum = parseInt(num1) + parseInt(num2);
document.write(num1 + " + " + num2 + " = " + sum + "<br><br>");

document.write("ii. Comparison: <br>");
if (num1 == num2)
{
    document.write(num1 + " & " + num2 + " are equal!" + "<br><br>");
}
else if (num1 > num2)
{
    document.write(num1 + " is greater than " + num2 + "!" + "<br><br>");
}
else
{
    document.write(num1 + " is less than " + num2 + "!" + "<br><br>");
}

document.write("iii. Logical: <br>");
var x = num1 || num2;
document.write(x + "<br><br>");

document.write("iv. Assignment <br>");
var z = parseInt(num1);
var y = parseInt(num2);
document.write(z+=y);