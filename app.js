// CHAPTER 9-11

// question 1

var city = prompt('enter your city name')
var khi = 'karachi'
if(city == khi){
    alert('welcome to the city of ligts')
}

// // question 2

var gender = prompt('what is your gender')
var male = 'male'
var female = 'female'
if(gender == male){
    alert('good morning sir !')
}else if(gender == female){
    alert('good morning mam ! ')
}else{
    alert('enter a valid gender')
}

// question 3

var colour = prompt('Enter any traffic signal colour')
if(colour == 'red'){
    document.write('Must stop')
}else if(colour == 'yellow'){
    document.write('Ready to move')
}else if(colour == 'green'){
    document.write('Move now')
}else{
    alert('Error : Please enter a valid traffic signal colour')
}

// question 4

var fuel = +prompt('enter your remaining fuel (in ltrs)')
if(fuel <= 0.25){
    alert('Please refill the fuel in your car')
}

// question 5
// TRUE AND FALSE

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
console.log('var a is true');

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
console.log('var b is false');

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
console.log('ONLY condition 4 of part C is true');

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
console.log('condition D is true');

if (true){
alert("True");
}
if (false){
alert("False");
}
console.log('condition E is true');

if("car" < "cat"){
alert("car is smaller than cat");
}
console.log('condition F is true');

// question 6

var comp = +prompt('Enter your marks fo computer')
var chem = +prompt('Enter your marks fo chemistry')
var phy = +prompt('Enter your marks fo physics')
var obtained = comp + chem + phy
var total = 300
var percentage = (obtained / total) * 100
document.write('Mark Sheet <br> Total marks = '+ total + '<br> Marks obtained = ' + obtained + '<br> Percentage = ' + percentage + '% <br>')
if (percentage >= 90 && percentage <= 99) {
    document.write('your grade is A one')
} else if (percentage >= 80 && percentage <= 89) {
    document.write('your grade is A')
} else if (percentage >= 70 && percentage <= 79) {
    document.write('your grade is B')
} else if (percentage >= 60 && percentage <= 69) {
    document.write('your grade is C')
} else if (percentage >= 50 && percentage <= 59) {
    document.write('your grade is D')
} else if (percentage < 50) {
    document.write('you are fail')
}
else {
    document.write('Error : please enter a valid value !')
}

// question 7

var num = 7 
var user_num = +prompt('enter a number between 1-10')
if(user_num == num){
    alert('Bingo ! You Won')
}else if(user_num == ++num){
    alert('Close enough!')
}else{
    alert('fail')
}

// question 8

var user_divis_num = +prompt('enter any number')
if(user_divis_num / 3){
    alert('this number is divisible by 3')
}else{
    alert('this number is not divisible by 3')
}

// question 9

var user_even_odd = +prompt('enter any number u want')
if(user_even_odd % 2 == 0){
    alert('This is an even number')
}else{
    alert('this is a odd number')
}

// question 10

var user_temp = +prompt('what is the temp outside')
if(user_temp > 40){
    alert('it is too hot outside')
}else if(user_temp > 30){
    alert('The weather today is normal')
}else if(user_temp > 20){
    alert('Todays weather is cool')
}else if(user_temp > 10){
    alert('OMG ! today weather is so cool')
}else{
    alert('Please enter a valid temperature value')
}

// question 11

var first_num = +prompt('Enter your first num');
var operation = prompt('Enter your operation');
var second_num = +prompt('Enter your second num');

if (operation == '+') {
    alert('Your result is ' + (first_num + second_num));
} else if (operation == '-') {
    alert('Your result is ' + (first_num - second_num));
} else if (operation == '*') {
    alert('Your result is ' + (first_num * second_num));
} else if (operation == '/') {
    alert('Your result is ' + (first_num / second_num));
} else {
    alert('Error! Please enter a valid operation.');
}


