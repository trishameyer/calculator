//Declare and define a function that takes in 3 parameters
//TYPE - will be a string equal to one of the following:
//"itemAdded"
//"calculated"
//"error"
//VALUE - either a string or a number
//ITEM - Only use for advanced functionality Object of different types

function screen_output (type, value, item){
   //$('#screen').text(value);
    $('#screen').text(value);
}


//Declare global variable
var my_calculator = new calculator(screen_output);


$(document).ready(function(){
   $('.row div').click(function(){
       console.log("button clicked");
       button_clicked(this);

   });

});

function button_clicked (button){
    var val = $(button).find('h2').text();
    console.log(val);
    my_calculator.addItem(val);
}