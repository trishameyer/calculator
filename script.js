var input_storage = [''];
var current_index = 0;


$(document).ready(function(){
    $('.number > button').click(function(){
        store_number($(this).text());
    });

    $('.operator > button').click(function(){
        store_operator($(this).text());
    });

    $('#equalSign').click(function(){
        getMathVariables(input_storage);
    });

    //$('#decimal').click(function(){
    //   store_number($(this).text());
    //});

    $('#CE').click(function(){
        resetCalculator($(this));
    });
});


//@purpose: to get the button value that is clicked and store it into a variable
//@params: button_value - the value of the button that is clicked'
//@return: none;
//@global variables:
    //input-storage - stores all inputs
    //current_index - the current index you are on
function store_number(button_value){
    input_storage[current_index]+= button_value;
    display_output();
}


//@purpose: get the button value of the operator that is clicked and store it into the input_storage array
//@params: button_value - the value of the button that is clicked
//@return: none
//@global:
    //input-storage - stores all inputs
    //current_index - the current index you are on
function store_operator(button_value){
    current_index++;
    input_storage[current_index] = button_value;
    current_index++;
    input_storage[current_index] = '';
    display_output();
}


//@purpose: to display the output that has been put into the input_storage variable
//params: none;
//return: none;
//global variables:
//input_storage - the storage of all inputs
function display_output(){
    var output = '';
    for(var i=0; i<input_storage.length; i++){
        output+= input_storage[i];
    }
    $('#screen').text(output);
}

//@purpose: to perform the math based on the two numbers and the one operator & decide which math (+-*/) to perform
//@params: num1, num2, operator
//@return: the results of the math
//global:
//input_storage - storage for all numbers and operators
//current_index - the current position in the input_storage
function perform_calc(op1, op2, operator){
    var result;
    var num1;
    var num2;
    //hard coded right now
    switch (operator){
        case '+':
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 + num2;
            break;
        case '-':
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 - num2;
            break;
        case 'x':
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 * num2;
            break;
        case '/':
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 / num2;
            break;
        default:
            result = "error";
    }
    input_storage = [''];
    input_storage += result;
    $('#screen').text(result);

}

//@purpose: iterate through the input_storage array and fetch the required data to perfom math, then pass these to perform_calc function
//@params: none
//@return: none
//global:
//input_storage - storage of all numbers and operators
function getMathVariables(array){
    console.log("do math function called");
    var number1;
    var number2;
    var operatorSign;
    input_storage.forEach(function(ele){
        if(isNaN(ele)){
            operatorSign = ele;
        } else if (!isNaN(ele) && number1 === undefined){
            number1 = parseFloat(ele);
        } else if (!isNaN(ele) && number2 === undefined){
            number2 = parseFloat(ele);
        }
    });

    perform_calc(number1, number2, operatorSign);
}


//@purpose: to reset the global variables and clear the output screen display
//@params: button_value- the value of the button pressed
//@return: none
//@global:
    //input_storage - the storage for all button inputs, numbers and operators
    //current_index - the index you are currently on
function resetCalculator(button_value){
    input_storage = [''];
    current_index = 0;
    display_output().empty();
}