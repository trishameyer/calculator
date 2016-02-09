var input_storage = [''];
var current_index = 0;


$(document).ready(function(){
    $('.number > button').click(function(){
        store_number($(this).text());
        console.log($(this).text());
    });

    $('.operator > button').click(function(){
        store_operator($(this).text());
        console.log($(this).text());
    });

    $('#equalSign').click(function(){
        getMathVariables(input_storage);
        console.log($(this).text());
    });

    $('#decimal').click(function(){
        decimalPoint($(this).text());
        console.log($(this).text());
    });

    $('#clear').click(function(){
        clearButton($(this));
    });

    $('#CE').click(function(){
        clearAll($(this));
    });
});


//@purpose: to get the button value that is clicked and store it into a variable
//@params: button_value - the value of the button that is clicked'
//@return: none;
//@global variables:
    //input-storage - stores all inputs
    //current_index - the current index you are on
function store_number(button_value){
  if(!isNaN(input_storage[current_index])){
      input_storage[current_index]+= button_value;
      display_output();
  } else if (isNaN(input_storage[current_index])){
      current_index++;
      if(input_storage[current_index] == undefined) {
          input_storage[current_index]= button_value;
          display_output();
      } else {
          input_storage[current_index] += button_value;
          display_output();
      }
  }
}


//@purpose: get the button value of the operator that is clicked and store it into the input_storage array
//@params: button_value - the value of the button that is clicked
//@return: none
//@global:
    //input-storage - stores all inputs
    //current_index - the current index you are on
function store_operator(button_value){
    if(!isNaN(input_storage[current_index])){
        if(input_storage[current_index] === ''){
           return;
        } else {
            current_index++;
            input_storage[current_index] = button_value;
        }
    } else if (isNaN(input_storage[current_index])){
        input_storage[current_index] = button_value;
    }
    display_output();
}

//@purpose: add a decimal point to the number but not to an operator. if the current index is a number, add the decimal point to the index after the number
function decimalPoint(button_value){
    if(!isNaN(input_storage[current_index])){
        console.log('entered decimal point if current index is a number');
        input_storage[current_index] += button_value;
    } else {
        console.log('entered decimal point if current index is not a number');
    }
    display_output(); //so right now the decimal only works if it isn't pressed after an operator
}

//function equals (button_value){
//    if (input_storage[current_index] === '='){
//
//    }
//}


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
    console.log('perform_calc function called');
    switch (operator){
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case 'x':
            result = op1 * op2;
            break;
        case '/':
            //if (op1 / 0){ ///all division is giving me the error
            //    result = "error";
            //} else {
                result = op1 / op2;
            //}
            break;
        default:
            result = "error";
    }
    input_storage.splice(0,2);
    input_storage[0] = result + '';
    console.log("input_storage after splice: ",input_storage);
    $('#screen').text(result);

}

//@purpose: iterate through the input_storage array and fetch the required data to perform math, then pass these to perform_calc function
//@params: none
//@return: none
//global:
//input_storage - storage of all numbers and operators
function getMathVariables(array){
    console.log("getMathVariables function called");
    var number1;
    var number2;
    var operatorSign;
    for (var i=0; i<array.length; i++){
        if(array[i] == '+' || array[i] == '-' || array[i] == 'x' || array[i] == '/') {
            operatorSign = array[i];
            number1 = parseFloat(array[i-1]);
            number2 = parseFloat(array[i+1]);
            perform_calc(number1, number2, operatorSign);
            number1 = null;
            number2 = null;
            operatorSign = null;
            i=0;
        }
    display_output();
    }
    current_index = 0;
}


//@purpose: to reset the global variables and clear the output screen display
//@params: button_value-   the value of the button pressed
//@return: none
//@global:
    //input_storage - the storage for all button inputs, numbers and operators
    //current_index - the index you are currently on
function clearAll(button_value){
    input_storage = [''];
    current_index = 0;
    display_output().empty();
}


//@purpose: to delete/clear the last value that was added into our input_storage and make it into an empty string so we can add another variable(number)...and call display_output function to revise our screen display
//@params: button_value- the value of the button pressed
//@return: none;
//@global:
    //input_storage - the storage for all button inputs, numbers, and operators

function clearButton (button_value){ //need to change how this works because it adds an empty string instead of just deleting the last index value
    input_storage[input_storage.length-1] = '';
    display_output();
}