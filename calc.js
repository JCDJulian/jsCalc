var num1 = "",
num2 = "";
var operand = "";

$(".num").click(function () {
    if(operand === ""){
    	num1 = num1 + ($(this).text());
    	alert(num1);
    }
    else{
    	num2 = num2 + ($(this).text());
    	alert(num2);
    }
    });

$(".operand").click(function () {
    alert($(this).text());
    operand = $(this).text();
    });

$("#equals").click(function () {
	if (num2 = "")
		num2 = num1;
    switch (operand){
	    case "+":
	    	num1 = add(num1, num2);
	    	alert(num1);
	    	num2 = "";
	    	operand = "";
	    	break;
	    case "-":
	    	num1 = subtract(num1, num2);
	    	alert(num1);
	    	num2 = "";
	    	operand = "";
	    	break;
	    case "*":
	    	num1 = multiply(num1, num2);
	    	alert(num1);
	    	num2 = "";
	    	operand = "";
	    	break;
	    case "/":
	    	num1 = divide(num1, num2);
	    	alert(num1);
	    	num2 = "";
	    	operand = "";
	    	break;
	    default:
	    break;
	}
});

function add(var1, var2) {
	var ans = parseInt(var1) + parseInt(var2);
	ans = ans.toString();
    return (ans);
}

function multiply(var1, var2) {
    return var1 * var2;
}

function divide(var1, var2) {
    return var1 / var2;
}

function subtract(var1, var2) {
    return (var1 - var2);
}