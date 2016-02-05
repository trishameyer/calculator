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
        do_math(input_storage);
    });

    $('#CE').click(function(){
        resetCalculator($(this).text());
    });
});


//@purpose: to get the button value that is clicked and store it into a variable
//@params: button_value - the value of the button that is clicked'
//@return: none;
//@global variables:
//input-storage
//current_index

function store_number(button_value){
    console.log("store number button value: ",button_value);
    input_storage[current_index]+= button_value;
    console.log("input storage: ",input_storage);
    display_output();
}


//@purpose: get the button value of the operator that is clicked and store it into the input_storage array
//@params: button_value - the value of the button that is clicked
//@return: none
//@global:
//input_storage
//current_index
function store_operator(button_value){
    console.log("store operator button value: ",button_value);
    current_index++;
    input_storage[current_index] = button_value;
    current_index++;
    input_storage[current_index] = '';
    console.log('input storage: ', input_storage);
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
    console.log('perform_calc called');
    console.log(op1);
    console.log(op2);
    console.log(operator);
    var result;
    var num1;
    var num2;
    //hard coded right now
    switch (operator){
        case '+':
            console.log('case addition entered');
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 + num2;
            console.log("result inside case: ", result);
            break;
        case '-':
            console.log('case subtraction entered');
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 - num2;
            console.log("result inside case: ", result);
            break;
        case 'x':
            console.log('case multiplication entered');
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 * num2;
            console.log("result inside case: ", result);
            break;
        case '/':
            console.log('case division entered');
            num1 = Number(op1);
            num2 = Number(op2);
            result = num1 / num2;
            console.log("result inside case: ", result);
            break;
        default:
            result = "error";
    }
    console.log('exited case statement');
    $('#screen').text(result);

}

//@purpose: iterate through the input_storage array and fetch the required data to perfom math, then pass these to perform_calc function
//@params: none
//@return: none
//global:
//input_storage - storage of all numbers and operators
function do_math(array){
    var number1;
    var number2;
    var operatorSign;
    for(var i=0; i<array.length; i++){
        if (i === 0){
            number1 = array[i];
            console.log("number 1: ",number1);
        } else if (i === 1){
            operatorSign = array[i];
            console.log('operator sign: ',operatorSign);
        } else if (i === 2){
            number2 = array[i];
            console.log('number 2: ',number2);
        }
    }
    perform_calc(number1, number2, operatorSign);
}

function resetCalculator(button_value){
    input_storage = [''];
    current_index = 0;
    display_output().empty();
}