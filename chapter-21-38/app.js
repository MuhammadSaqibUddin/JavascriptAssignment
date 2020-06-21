//==================== Chapter: 21-25 Assignment start =======================
//Q:1 .Ans
// var firstName = prompt("Enter your first name","first name");
// var lastName = prompt("Enter your last name","last name");
// var fullName = firstName +" "+ lastName;
// alert("Hi, "+fullName +"\nWelcome to javascript.");

// Q:2 .Ans
// var mobileName = prompt("Enter the name of your favorite mobile phone model");
// document.write("My favorite phone is: "+mobileName
// +"<br>Length of string: "+mobileName.length);

//Q:3 .Ans
// var a = "Pakistani";
// document.write("String: "+a+"<br>Index of 'n': "+a.indexOf('n'));

// Q:4 .Ans
// var a = "Hello World";
// document.write("String: "+a+"<br>Last Index of 'l': "+a.lastIndexOf('l'));

//Q:5 .Ans
// var a = "Pakistani";
// document.write("String: "+a+"<br>Character at index 3: "+a[3]);

//Q:6 .Ans
// var firstName = prompt("Enter your first name","first name");
// var lastName = prompt("Enter your last name","last name");
// var fullName = firstName.concat(" "+lastName);
// alert("Hi, "+fullName +"\nWelcome to javascript.");

//Q:7 .Ans
// var city = "Hyderabad";
// document.write("City: "+city+"<br>After replacement: "+city.replace("Hyder","Islam"));

//Q:8 .Ans
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMsg = message.replace("and","&").replace("and","&");
// document.write("String: "+message+"<br>After replacement: "+replaceMsg);

//Q:9 .Ans
// var num = "472";
// var n = parseInt(num);
// document.write("Value: "+num+"<br>Type: "+typeof(num)+"<br>"+"Value: "+n+"<br>Type: "+typeof(n));

//Q:10 .Ans
// var input = prompt("Enter any string");
// document.write("User input: "+input
// +"<br>Upper case: "+input.toUpperCase());

//Q:11 .Ans
// var input = prompt("Enter any string");
// var txtSplit, finalTxt = "", firstChar, otherChars;
// if (input.search(" ") && input != "") {
//     txtSplit = input.split(" ");
//     for (var i = 0; i < txtSplit.length; i++) {
//         firstChar = txtSplit[i].slice(0, 1);
//         otherChars = txtSplit[i].slice(1);
//         txtSplit[i] = firstChar.toUpperCase() + otherChars.toLowerCase();
//         finalTxt += txtSplit[i] + " ";
//     }
//     document.write("User input: " + input + "<br>Title case: " + finalTxt);
// }
// else {
//     if (input != "") {
//         firstChar = input.slice(0, 1);
//         otherChars = input.slice(1);
//         finalTxt = firstChar.toUpperCase() + otherChars.toLowerCase();
//         document.write("User input: " + input + "<br>Title case: " + finalTxt);
//     }
// }

//Q:12 .Ans
// var num = 35.36;
// var s = num.toString().split('.').join("");
// document.write("Number: "+num+"<br>Result: "+s);

//Q:13 .Ans
// var name = prompt("Enter your username");
// for(var i = 0; i < name.length; i++){
//     if((name[i].charCodeAt(0) >= 33 && name[i].charCodeAt(0) <= 47) || (name[i].charCodeAt(0) >= 58 && name[i].charCodeAt(0) <= 64) || (name[i].charCodeAt(0) >= 91 && name[i].charCodeAt(0) <= 96) || (name[i].charCodeAt(0) >=123 && name[i].charCodeAt(0) <= 126)){
//         alert("\u26A0 Please enter a valid username\n\n\u25A2 Prevent this page from creating additional dialog");
//     }
// }

//Q:14 .Ans
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = window.prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var index = -1;
// for(var i = 0; i < items.length; i++){
//     if(items[i] === input.toLowerCase()){
//         index = i;
//     }
// }
// if(input){
//     if(index > -1){
//         document.write(input.toLowerCase()+" is <b>available</b> at index "+index+" in our bakery");
//     }
//     else{
//         document.write("We are sorry. "+input.toLowerCase()+" is <b>not available</b> in our bakery");
//     }
// }
// else{
//     alert("Please enter item name you want.");
// }

//Q:15 .Ans
// var alphanumeric = /^[0-9a-zA-Z]+$/;
// var password = prompt("Enter your password");
// document.write("Entered password: "+password+"<br>");

// if(password.match(alphanumeric)){
//     if((password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57)){
//         document.write("Password can not begin with a number<br>Please enter a valid password");
//     }
//     else if(password.length < 6){
//         document.write("Password must be at least 6 characters long");
//     }
//     else{
//         document.write("Correct!. Password is valid");
//     }
// }
// else{
//     document.write("Password should contain alphabets and numbers<br>Please enter a valid password");
// }

//Q:16 .Ans
// var university = "University of Karachi";
// var arr = university.split('');
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i]+"<br>");
// }

//Q:17 .Ans
// var input = prompt("Enter any string");
// document.write("User input: "+input+"<br>"+"Last character of input: "+input.charAt(input.length - 1));

//Q:18 .Ans
// var txt = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var arr = txt.split(" ");
// for(var i = 0; i < arr.length; i++){
//     if(arr[i].toLowerCase() === "the"){
//         count++;
//     }
// } 
// document.write("Text: "+txt+"<br>There are "+count+" occurrence(s) of word 'the'");

//======================= Chapter: 21-25 end =======================================

//==================== Chapter: 26-30 Assignment start =============================
//Q:1 .Ans
// var num = +prompt("Enter a positive integer");
// document.write("number: "+num+"<br>round off value: "+Math.round(num)
// +"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

//Q:2 .Ans
// var num = +prompt("Enter negative floating point number");
// document.write("number: "+num+"<br>round off value: "+Math.round(num)
// +"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

//Q:3 .Ans
// var num = +prompt("Enter any number");
// document.write("The absolute value of "+num+" is "+Math.abs(num));

//Q:4 .Ans
// var num = Math.random();
// var range = (num * 6) + 1;
// var diceNum = Math.floor(range);
// document.write("random dice value: "+diceNum);

//Q:5 .Ans
// var num = Math.floor((Math.random() * 2) + 1);
// if(num > 1){
//     document.write(num+"<br>random coin value: Heads");
// }
// else{
//     document.write(num+"<br>random coin value: Tails");
// }

//Q:6 .Ans
// var num = Math.floor((Math.random() * 100) + 1);
// document.write("random number between 1 and 100: "+num)

//Q:7 .Ans
// var weight = prompt("Enter your weight in kilograms");
// var unit = "",num = "";
// for(var i = 0; i < weight.length; i++){
//     if((weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57) || weight.charCodeAt(i) == 46){
//         num += weight.charAt(i);  
//     }
//     else{
//         unit += weight.charAt(i);
//     }
// }
// if((unit == "" || unit.charCodeAt(0) == 32 || unit.toLowerCase() === "kgs" || unit.toLowerCase() === "kilograms") && num!=""){
//     document.write("The weight of user is "+num+" kilograms");
// }
// else{
//     alert("wrong input");
// }

//Q:8 .Ans
// var secret = Math.floor((Math.random() * 10) + 1);
// var input = +prompt("Enter a number between 1 and 10");
// if(secret === input){
//     alert("Congratulate! You win");
// }
// else{
//     alert("Try again!");
// }

//======================= Chapter: 26-30 end =======================================


//==================== Chapter: 31-34 Assignment start =============================
//Q:1 .Ans
// document.write(new Date());

//Q:2 .Ans
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current month: "+ month[new Date().getMonth()] );

//Q:3 .Ans
// alert("Today is "+ new Date().toString().slice(0,3));

//Q:4 .Ans
// var day = new Date().toString().slice(0,3);
// if(day === "Sat" || day === "Sun"){
//     document.write("It's Fun day");
// }

//Q:5 .Ans
// var date = new Date().getDate();
// if(date < 16){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

//Q:6 .Ans
// var date = new Date();
// document.write("Current Date: "+date+"<br>"
// +"Elapsed milliseconds since January 1, 1970: "+date.getTime()+"<br>"
// +"Elapsed minutes since January 1, 1970: "+ date.getTime()/(1000 * 60) );

//Q:7 .Ans
// var hour = new Date().getHours();
// if(hour < 12){
//     alert(hour+" It's AM");
// }
// else{
//     alert(hour+" It's PM");
// }

//Q:8 .Ans
// var laterDate = new Date("December 31, 2020");
// alert(laterDate);

//Q:9 .Ans
// var d = new Date().getTime() - new Date("April 24, 2020").getTime();
// alert(Math.floor(d/(1000 * 60 * 60 * 24))+" days have passed since 1st Ramadan, 2020");

//Q:10 .Ans
// var current = new Date();
// var d = new Date().getTime() - new Date("January, 2020").getTime();
// document.write("On reference date "+current
// +",<br>"+Math.round( (d/ 1000) )+" seconds had passed since beginning of "+current.getFullYear() );

//Q:11 .Ans
// var d = new Date();
// d.setHours(d.getHours() - 1);
// document.write("current date: "+new Date() +"<br> 1 hour ago, it was "+d);

//Q:12 .Ans
// var d = new Date();
// d.setFullYear((d.getFullYear() - 100));
// document.write("current date: "+new Date() +"<br> 100 years back, it was "+d);

//Q:13 .Ans
// var age = prompt("Enter your age");
// var year = new Date().getFullYear() - age;
// document.write("Your age is "+age+"<br>Your birth year is "+year);

//Q:14 .Ans
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var name = prompt("Enter Customer Name: ");
// var units = +prompt("Enter No. of units");
// var chargesPerUnit = 16, latePay = 350;
// var netAmount = Math.round(units * chargesPerUnit);

// document.write("<div id = "+ " bill \" >"
// +"<h1>K-Electric Bill</h1>"
// +"Customer Name: <b>"+name+"</b><br>"
// +"Month: <b>"+month[new Date().getMonth()]+"</b><br>"
// +"Number of units: <b>"+units+"</b><br>"
// +"Charges per unit: <b>"+chargesPerUnit+"</b><br><br>"
// +"Net Amount Payable (within Due Date): <b>"+netAmount+"</b><br>"
// +"Late payment surcharge: <b>"+latePay+"</b><br>"
// +"Gross Amount Payable (after Due Date): <b>"+Math.round(netAmount + latePay)+"</b><br>"
// +"</div>");

//======================= Chapter: 31-34 end =======================================


//==================== Chapter: 35-38 Assignment start =============================
//Q:1 .Ans
// function dateTime(){
//     document.write(new Date());
// }
// dateTime();

//Q:2 .Ans
// function greet(firstName,lastName){
//     alert("Assalam-u-alaikum, "+firstName+" "+lastName+"\nWelcome to Javascript");
// }
// greet("Muhammad","Ali");

//Q:3 .Ans
// function add(num1,num2){
//     return (num1 + num2);
// }
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// var sum = add(num1,num2);
// alert(sum);

//Q:4 .Ans
// function calculator(num1,num2,operation){
//     var result;
//     if(operation ==='+'){
//         result = num1 + num2;
//     }
//     else if(operation ==='-'){
//         result = num1 - num2
//     }
//     else if(operation ==='*'){
//         result = num1 * num2
//     }
//     else if(operation ==='/'){
//         result = num1 / num2
//     }
//     else if(operation ==='%'){
//         result = num1 % num2
//     }
//     else{
//         result = "";
//     }
//     return result;
// }
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// var op = prompt("Enter operation (+, - , * , / , %) ");
// var ans = calculator(num1,num2,op);
// if( ans !== ""){
//     document.write("1st Number: "+num1
//     +"<br>2nd Number: "+num2+"<br>Operation: <b>"+op+"</b><br>"
//     +"Result: "+ ans);
// }
// else{
//     alert("Invalid Input.")
// }

//Q:5 .Ans
// function square(num){
//     alert(Math.pow(num,2));
// }
// square(5);

//Q:6 .Ans
// function factorial(num){
//     var fact = 1;
//     if(num > 1){
//         fact = num;
//         for(var i = num-1; i > 1; i--){
//             fact = fact * i;
//         }
//         alert("Factorial of "+num+" is "+fact);
//     }
//     else if(num === 0 || num === 1){
//         alert("Factorial of "+num+" is "+fact);
//     }
//     else{
//         alert("Invalid input or number");
//     }
// }
// factorial(10);

//Q:7 .Ans
// function counting(start,end){
//     if(end > start){
//         for(var i = start; i <= end; i++){
//             document.write(i+"<br>");
//         }
//     }
//     else{
//         for(var i = start; i >= end; i--){
//             document.write(i+"<br>");
//         }
//     }
// }
// var start = +prompt("Enter starting number");
// var end = +prompt("Enter ending number");
// counting(start,end);

//Q:8 .Ans
// function calculateHypotenuse(base,perpendicular){
//     var result = calculateSquare(base) + calculateSquare(perpendicular);
//     document.write("Base: "+base+"<br>Perpendicular: "+perpendicular
//     +"<br>Hypotenuse: "+ Math.sqrt(result).toFixed(1) );

//     function calculateSquare(num){
//         return Math.pow(num,2);
//     }
// }
// var base = +prompt("Enter base: ");
// var perp = +prompt("Enter perpendicular: ");
// calculateHypotenuse(base,perp);

//Q:9 .Ans
// function area(width,height){
//     alert("area: "+ (width * height));
// }
// area(20,40);
// var width = 25,height = 50;
// area(width,height);

//Q:10 .Ans
// function palindrom(word){
//     if(word !=""){
//         var reverse = "";
//         for(var i = word.length-1; i >= 0; i--){
//             reverse += word[i];
//         }
//         if(word.toLowerCase() === reverse.toLowerCase()){
//             alert("Given string is palindrom");
//         }
//         else{
//             alert("Given string is not palindrom");
//         }
//     }
//     else{
//         alert("Please enter any string")
//     }
// }
// palindrom("Madam");

//Q:11 .Ans
// function titleCase(input){
//     var arr = input.split(' ');
//     var output = "";
//     for(var i = 0; i < arr.length; i++){
//         var firstLetter = arr[i].slice(0,1).toUpperCase();
//         var otherLetter = arr[i].slice(1);
//         output += firstLetter + otherLetter +" ";
//     }
//     document.write("Input string: "+input+"<br>"
//     +"Output string: "+output);
// }
// titleCase("the quick brown fox");

//Q:12 .Ans
// function longestWord(input) {
//     var arr = input.split(' ');
//     var output = arr[0];
//     for (var i = 0; i < arr.length - 1; i++) {
//         if(arr[i+1].length > output.length){
//             output = arr[i+1];
//         }
//     }
//     document.write("Input string: " + input + "<br>"
//         + "Longest word: " + output);
// }
// longestWord("web development tutorial");

//Q:13 .Ans
// function letterOccurr(word,letter){
//     var count = 0;
//     for(var i = 0; i < word.length; i++){
//         if(word[i].toLowerCase() === letter.toLowerCase()){
//             count++;
//         }
//     }
//     document.write("String: "+word+", Letter: "+letter
//     +"<br>letter '"+letter+"' "+count+" times occurr in the string");
// }
// letterOccurr("JSResourceS.com",'o');

//Q:14 .Ans
// function calcCircumference(radius){
//     document.writeln("The circumference is "+(2 * Math.PI * radius ).toFixed(2) );
// }
// function calcArea(radius){
//     document.writeln("The area is "+(Math.PI * Math.pow(radius,2) ).toFixed(2) );
// }
// calcCircumference(3.55);
// calcArea(3.44);

//======================= Chapter: 35-38 end =======================================































