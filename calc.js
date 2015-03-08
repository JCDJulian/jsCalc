var num1 = "",
    num2 = "",
    ans = "",
    operand = "";

$(".num").click(function () {
    if (operand === "") {
        if (ans === "") {
            num1 = num1 + ($(this).text());
        } else {
            num1 = $(this).text();
            ans = "";
        }
    } else {
        num2 = num2 + ($(this).text());
    }
    if(operand === ""){
        $("#display").html(num1);
    }
    else{
        $("#display").html(num1 + operand + num2);
    }
});

$(".operand").click(function () {
    operand = $(this).text();
    num2 = "";
    $("#display").html(num1 + operand);
});

$("#equals").click(function () {
    console.log("Num1 is " + num1 + " and Num2 is " + num2);
    if (num1 === "") num1 = num2;
    switch (operand) {
        case "+":
            num1 = add(num1, num2);
            //num2 = "";
            //operand = "";
            break;
        case "-":
            num1 = subtract(num1, num2);
            //num2 = "";
            //operand = "";
            break;
        case "*":
            num1 = multiply(num1, num2);
            //num2 = "";
            //operand = "";
            break;
        case "/":
            num1 = divide(num1, num2);
            //num2 = "";
            //operand = "";
            break;
        default:
            break;
    }
    $("#display").html(ans);
});

$("#clear").click(function () {
    num1 = "";
    num2 = "";
    operand = "";
    ans = "";
    $("#display").html("0");

});


function add(var1, var2) {
    ans = (parseInt(var1) + parseInt(var2)).toString();
    return ans;
}

function multiply(var1, var2) {
    ans = (parseInt(var1) * parseInt(var2)).toString();
    return ans;
}

function divide(var1, var2) {
    ans = (parseInt(var1) / parseInt(var2)).toString();
    return ans;
}

function subtract(var1, var2) {
    ans = (parseInt(var1) - parseInt(var2)).toString();
    return ans;
}