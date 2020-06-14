//===================Chapter:1 Assignment start==================================
//Q:1 .Ans
//alert("Assalam-u-alaikum, How are you.?\nWelcome to example.com");

//Q:2 .Ans
//alert("Eror! Please enter a valid password");

//Q:3 .Ans
//alert("Welcome to JS Land...\nHappy Coding!");

//Q:4 .Ans
// alert("Welcome to JS Land...");
// alert("Happy Coding!\n\u25A2 Prevent this page from creating additional dialogs");

//Q:5 .Ans
// console.log("Hello... I can run JS through my web browser's console");

//==============================Chapter:1 end ====================================


//===================Chapter:2 Assignment start==================================
// Q:1 .Ans
//var username;

// Q:2 .Ans
// var myName = "Muhammad Saqib Uddin";

// Q:3 .Ans
// 3(a) var message;
// 3(b) message = "Hello World";
// 3(c) alert(message);

// Q:4 .Ans
// var studentName = "Johne Doe", studentAge = "15 years old", studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// Q:5 .Ans
// var pizza = "PIZZA";
// alert(pizza+"\n"+pizza.slice(0,4)+"\n"+pizza.slice(0,3)+"\n"+pizza.slice(0,2)+"\n"+pizza.slice(0,1));

// Q:6 .Ans
// var email;
// email = "saqibuddin083@gmail.com";
// alert("My email address is "+email);

// Q:7 .Ans
// var book;
// book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+book);

// Q:8 .Ans
// document.write("Yah! I can write HTML content through Javascript");

// Q:9 .Ans
// var s = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(s);
// document.write(s);

//==============================Chapter:2 end ====================================


//==============================Chapter:3 Assignment start ==============================
// Q:1 .Ans
// var age;
// age = "22";
// alert(age);

// Q:2 .Ans 
// let n = 0;
// document.write("You have visited this site "+ ++n +" times");

// Q:3 .Ans
// var birthYear;
// birthYear = 1994;
// document.write("My birth year is "+ birthYear+ "<br>Data type of my declared variable is "+typeof(birthYear));

// Q:4 .Ans
// var visitorName = "John Doe", productTitle = "T-shirts(s)", quantity = 5;
// document.write(visitorName+" ordered "+ quantity+" "+productTitle+ " on XYZ Clothing store");

//==============================Chapter:3 end ==========================================


//==============================Chapter:4 Assignment start ==============================
// Q:1 .Ans
// var name, age, gender;

// Q:2 .Ans
// Legal variable declaration
// 1: var userName;
// 2: var first_Name;
// 3: var name1;
// 4: var $name;
// 5: var _name;

// Illegal variable declaration
// 1: var user name;
// 2: var 1name;
// 3: var #name;
// 4: var var;
// 5: var name%;

// Q:3 .Ans
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain, numbers, $, and _. For example: $my_1stVariable<br>");
// document.write("Variables must begin with a, letters, $, or _. For example: $name, _name or name<br>"); 
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords");

//==============================Chapter:4 end ==========================================


//==============================Chapter:5 Assignment start ==============================
// Q:1 .Ans
// var num1 = +prompt("Enter 1st number : ","enter any number");
// var num2 = +prompt("Enter 2nd number : ","enter any number");
// var result = num1 + num2;
// document.write("Sum of "+num1 +" and "+num2 +" is "+result);

// Q:2 .Ans
// var num1 = +prompt("Enter 1st number : ","enter any number");
// var num2 = +prompt("Enter 2nd number : ","enter any number");
// var subtract = num1 - num2;
// var multiply = num1 * num2;
// var divide = num1 / num2;
// var modulus = num1 % num2;
// document.write("Subtraction of "+num1 +" and "+num2 +" is "+subtract+"<br>");
// document.write("Multiplication of "+num1 +" and "+num2 +" is "+multiply+"<br>");
// document.write("Division of "+num1 +" and "+num2 +" is "+divide+"<br>");
// document.write("Modulus of "+num1 +" and "+num2 +" is "+modulus);

// Q:3 .Ans
// var num;
// document.write("Value after variable declaration is "+num+"<br>");
// num = 5;
// document.write("Initial value: "+num+"<br>");
// num++;
// document.write("Value after increment: "+num+"<br>");
// num = num + 7;
// document.write("Value after addition is: "+num+"<br>"); 
// num--;
// document.write("Value after decrement is: "+num+"<br>");
// num = num % 3;
// document.write("The remainder is: "+num);

// Q:4 .Ans
// var ticket_Price = 600;
// var buying_Tickets = 5;
// var cost = ticket_Price * buying_Tickets;
// document.write("Total cost to buy "+buying_Tickets+" tickets to a movie is "+cost+"PKR");

// Q:5 .Ans
// document.write("Table of 5 <br>");
// for(var i = 1; i<=10; i++){
//     document.write("5 x "+i+" = "+ 5*i+"<br>");
// }

// Q:6 .Ans
// var celsius = 25;
// var fahrenheit = (celsius * (9/5))+ 32;
// document.write(celsius+"<sup>o</sup>C is "+fahrenheit+"<sup>o</sup>F<br>");
// var fahrenheit = 70;
// var celsius = (fahrenheit -32) * (5/9);
// document.write(fahrenheit+"<sup>o</sup>F is "+celsius+"<sup>o</sup>C");

// Q:7 .Ans
// var item1_Price = 650, item2_Price = 100, quantity_Item1 = 3,quantity_Item2 = 7, shipping_Charges = 100, cost;
// cost = (item1_Price * quantity_Item1) + (item2_Price * quantity_Item2) + shipping_Charges;
// document.write("<h1>Shopping Cart</h1><br><br><br>");
// document.write("Price of Item 1 is "+item1_Price +"<br>");
// document.write("Quantity of Item 1 is "+quantity_Item1 +"<br>");
// document.write("Price of Item 2 is "+item2_Price +"<br>");
// document.write("Quantity of Item 2 is "+quantity_Item2 +"<br>");
// document.write("Shipping Charges "+shipping_Charges +"<br><br>");
// document.write("Total cost of your order is "+cost);

// Q:8 .Ans
// var total_Marks = 980, obt_Marks = 804, percentage;
// percentage = (obt_Marks/total_Marks) * 100;
// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total marks: "+total_Marks+"<br>");
// document.write("Marks obtained: "+obt_Marks+"<br>");
// document.write("Percentage: "+percentage+"%");

// Q:9 Ans
// var dollar = 10, riyal = 25,pkr;
// pkr = (dollar * 104.80)+ (riyal * 28);
// document.write("<h1>Currency in PKR</h1><br><br><br>");
// document.write("Total currency in PKR: "+pkr);

// Q:10 .Ans
// var num = 10;
// var result = (num + 5 * 10) / 2;
// document.write(result);

// Q:11 .Ans
// var today = new Date();
// var current_Year = today.getFullYear();
// var birth_Year = 1996;
// document.write("<h1>Age Calculator</h1><br><br><br>");
// document.write("Current Year: "+current_Year+"<br>");
// document.write("Birth Year: "+birth_Year+"<br>");
// document.write("Your age is: "+(current_Year - birth_Year));

// Q:12 .Ans
// var radius = 20;
// document.write("<h1>The Geometrizer</h1><br><br><br>");
// document.write("Radius of a circle: "+ radius+"<br>");
// document.write("The circumference is: "+(2 * Math.PI * radius)+"<br>");
// document.write("The area is: "+(Math.PI * Math.pow(radius,2)).toFixed(1) );

// Q:13 .Ans
// var snack = "Chocolate chip";
// var age = 20;
// var max_age = 60;
// var amount = 3;
// document.write("<h1>The Lifetime Supply Calculator</h1><br><br><br>");
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current Age: "+age+"<br>");
// document.write("Estimated Maximum Age: "+max_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+((max_age - age) * 3) +" chocolate chip to last you until the ripe old age of "+max_age);

//==============================Chapter:5 end ==========================================



//==============================Chapter:6-9 Assignment start ==============================
// Q:1 .Ans
// var num = +prompt("Enter a number","your number");
// document.write("Result:<br>The value of num is: "+num+"<br>............................................<br><br>");
// document.write("The value of ++num is: "+ (++num)+"<br>Now the value of num is: "+num+"<br><br><br>");
// document.write("The value of num++ is: "+ (num++)+"<br>Now the value of num is: "+num+"<br><br><br>");
// document.write("The value of --num is: "+ (--num)+"<br>Now the value of num is: "+num+"<br><br><br>");
// document.write("The value of num-- is: "+ (num--)+"<br>Now the value of num is: "+num);

// Q:2 .Ans
// document.write("--a;    This is pre-decrement means it decrement the value first then print, so the value of a is 1<br><br>");
// document.write("--a - --b;     value of --a is 1 and --b is 0, so the output will be: 1 - 0 = 1 <br><br>");
// document.write("--a - --b + ++b;     value of --a is 1 and --b is 0 and ++b is 1,then: 1 - 0 + 1 = 2 <br><br>");
// document.write("--a - --b + ++b + b--;   value of --a is 1 and --b is 0 and ++b is 1 and b-- is 1 because it is post-decrement,so : 1 - 0 + 1 + 1= 3<br><br>");
// document.write("The output is: 3");

// Q:3 .Ans
// var name = prompt("Enter your Name: ","your name");
// document.write("<h1>"+name+"</h1> <br><h2>Assalam-u-alaikum. How are you.?</h2><br><h2>Welcome to Javascript Programming</h2>");

// Q:4 .Ans
// var num = +prompt("Enter a number for print table","your number");
// if(!num){
//     num = 5;
// }
// for(var i = 1; i<=10; i++){
//     document.write(num+" x "+i+" = "+num*i+"<br>");
// }

// Q:5 .Ans
// var subject_1 = prompt("Enter name of 1st subject","subject name");
// var subject_2 = prompt("Enter name of 2nd subject","subject name");
// var subject_3 = prompt("Enter name of 3rd subject","subject name");
// var totalMarks = 100;
// var obtMarks_1 = +prompt("Enter obtained marks for "+ subject_1 ,"obtained marks");
// var obtMarks_2 = +prompt("Enter obtained marks for "+ subject_2 ,"obtained marks");
// var obtMarks_3 = +prompt("Enter obtained marks for "+ subject_3 ,"obtained marks");
// var total_Obtained = obtMarks_1 + obtMarks_2 + obtMarks_3;
// document.write("<table>"+
//                   "<tr>"+ 
//                      "<th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th>"+ 
//                   "</tr>"+

//                   "<tr>"+
//                      "<td>"+ subject_1 +"</td> <td>"+ totalMarks +"</td> <td>"+ obtMarks_1 +"</td> <td>"+ Math.round((obtMarks_1/totalMarks)* 100) +"%</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td>"+ subject_2 +"</td> <td>"+ totalMarks +"</td> <td>"+ obtMarks_2 +"</td> <td>"+ Math.round((obtMarks_2/totalMarks)* 100) +"%</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td>"+ subject_3 +"</td> <td>"+ totalMarks +"</td> <td>"+ obtMarks_3 +"</td> <td>"+ Math.round((obtMarks_3/totalMarks)* 100) +"%</td>"+                  
//                   "</tr>"+

//                   "<tr style="+" text-align: center; \">"+
//                      "<th> </th> <th>"+ (totalMarks*3) +"</th> <th>"+ total_Obtained +"</th> <th>"+  Math.round((total_Obtained/(totalMarks*3))* 100).toFixed(1) +"%</th>"+                  
//                   "</tr>"+

//                 "</table>");

//==============================Chapter:6-9 end ==========================================


//==============================Chapter:9-11 Assignment start ==============================
// Q:1 .Ans
// var city = prompt("Enter city name","city name");
// if(city.toLowerCase()==="karachi"){
//     alert("Welcome to city of lights");
// }

//Q:2 .Ans 
// var gender = prompt("Enter your gender","gender");
// if(gender.toLowerCase()==="male"){
//     alert("Good Morning Sir.");
// }
// else if(gender.toLowerCase()==="female"){
//     alert("Good Morning Ma'am");
// }

// Q:3 .Ans
// var color1 = prompt("Enter 1st color name of traffic signal","color name");
// var color2 = prompt("Enter 2nd color name of traffic signal","color name");
// var color3 = prompt("Enter 3rd color name of traffic signal","color name");
// var redMsg= "Must Stop", yellowMsg = "Ready to move", greenMsg = "Move now",redColor = "Red",yellowColor = "Yellow",greenColor = "Green",color1Msg,color2Msg,color3Msg;
// if(color1.toLowerCase()===redColor.toLowerCase()){
//    color1 = redColor;
//    color1Msg = redMsg;
// }
// else if(color1.toLowerCase()===yellowColor.toLowerCase()){
//    color1 = yellowColor
//    color1Msg = yellowMsg;
// }
// else if(color1.toLowerCase()===greenColor.toLowerCase()){
//    color1 = greenColor;
//    color1Msg = greenMsg;
// }
// if(color2.toLowerCase()===redColor.toLowerCase()){
//    color2 = redColor;
//    color2Msg = redMsg;
// }
// else if(color2.toLowerCase()===yellowColor.toLowerCase()){
//    color2 = yellowColor;
//    color2Msg = yellowMsg;
// }
// else if(color2.toLowerCase()===greenColor.toLowerCase()){
//    color2 = greenColor;
//    color2Msg = greenMsg;
// }
// if(color3.toLowerCase()===redColor.toLowerCase()){
//    color3 = redColor;
//    color3Msg = redMsg;
// }
// else if(color3.toLowerCase()===yellowColor.toLowerCase()){
//    color3 = yellowColor;
//    color3Msg = yellowMsg;
// }
// else if(color3.toLowerCase()===greenColor.toLowerCase()){
//    color3 = greenColor;
//    color3Msg = greenMsg;
// }
// document.write("<table class="+" color-table \" "+ ">"+
//                   "<tr>"+ 
//                      "<th> Signal color </th> <th> Message </th>"+ 
//                   "</tr>"+

//                   "<tr>"+
//                      "<td><b>"+ color1 +"</b></td> <td>"+ color1Msg +"</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td><b>"+ color2 +"</b></td> <td> "+ color2Msg +"</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td><b>"+ color3 +"</b></td> <td> "+ color3Msg +" </td>"+                  
//                   "</tr>"+

//                   "<tr><td> <br> </td> <td> <br> </td> </tr>"+

//                 "</table>");

// Q:4 .Ans
// var fuel = +prompt("Enter remaining fuel(in litres)","fuel litres");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car.")
// }

// Q:5 .Ans
// a.  output: Alert message displayed
// b.  output: Alert message not displayed
// c.  output: condition 2 and 4 displayed
// d.  output: Alert message displayed
// e.  output: only True message displayed
// f.  output: Alert message displayed 

// Q:6 .Ans
// var obtMarks_1 = +prompt("Enter obtained marks for 1st subject","obtained marks");
// var total_Marks_1 = +prompt("Enter total marks for 1st subject","total marks");
// var obtMarks_2 = +prompt("Enter obtained marks for 2nd subject","obtained marks");
// var total_Marks_2 = +prompt("Enter total marks for 2nd subject","total marks");
// var obtMarks_3 = +prompt("Enter obtained marks for 3rd subject","obtained marks");
// var total_Marks_3 = +prompt("Enter total marks for 3rd subject","total marks");
// var total_Marks = total_Marks_1 + total_Marks_2 + total_Marks_3;
// var obt_Marks = obtMarks_1 + obtMarks_2 + obtMarks_3;
// var percentage = Math.round( (obt_Marks/total_Marks) * 100 );
// var remarks,grade;
// if(percentage >= 80){
//     remarks = "Excellent";
//     grade = "A-one";
// }
// else if(percentage >= 70){
//     remarks = "Good";
//     grade = "A";
// }
// else if(percentage >= 60){
//     remarks = "You need to improve";
//     grade = "B";
// }
// else{
//     remarks = "Sorry";
//     grade = "Fail";
// }
// document.write("<h1>Marks Sheet</h1><br><br><br>Total marks: "+total_Marks+"<br>"
//                  +"Marks obtained : "+obt_Marks+"<br>"+"Percentage : "+percentage+"%<br>"
//                  +"Grade : "+grade+"<br>"+"Remarks: "+remarks);

// Q:7 .Ans
// var num = 7;
// var guess = +prompt("Guess a secret number from 1 to 10","enter a number");
// if(guess===num){
//     alert("Bingo! Correct Answer.");
// }
// else if(++guess===num){
//     alert("Close enough to the correct answer.");
// }

// Q:8 .Ans
// var num = +prompt("Enter a number","enter number");
// if((num % 3)===0){
//     alert("Given number is divisible by 3");
// }
// else{
//     alert("Given number is not divisible by 3");
// }

// Q:9 .Ans
// var num = +prompt("Enter a number to check even or odd","enter number");
// if((num % 2)===0){
//     alert(num+" is an even number");
// }
// else{
//     alert(num+" is an odd number");
// }

// Q:10 .Ans
// var temperature = +prompt("Enter temperature","temperature");
// if(temperature > 40){
//     alert("It is too hot outside.");
// }
// else if(temperature > 30){
//     alert("The Weather today is Normal.");
// }
// else if(temperature > 20){
//     alert("Today's Weather is cool.");
// }
// else if(temperature > 10){
//     alert("OMG! Today's Weather is so Cool.");
// }

// Q:11 .Ans
// var num1 = +prompt("Enter 1st number","1st number");
// var num2 = +prompt("Enter 2nd number","2nd number");
// var operation = prompt("Enter operation(+, - , *, /, %)","operation");
// var result;
// if(operation==="+"){
//     result = num1 + num2;
// }
// else if(operation==="-"){
//     result = num1 - num2;
// }
// else if(operation==="*"){
//     result = num1 * num2;
// }
// else if(operation==="/"){
//     result = num1 / num2;
// }
// else if(operation==="%"){
//     result = num1 % num2;
// }
// document.write("<h3>1st Number : "+num1+"<br>"+"2nd Number : "+num2
//                +"<br>"+"Operation : <span style="+"font-size:30px;\" >"+operation+"</span><br>"+"Result : "+result+"</h3>");


//==============================Chapter:9-11 end ==========================================


//==============================Chapter:12-13 Assignment start ==============================
// Q:1 .Ans
// var character = prompt("Enter any character");
// if((character.charCodeAt() >= 65 && character.charCodeAt() <= 90)){
//     alert("Given input is an uppercase letter.");
// }
// else if((character.charCodeAt() >= 97 && character.charCodeAt() <= 122)){
//     alert("Given input is lowercase letter.");
// }
// else if((character.charCodeAt() >= 48 && character.charCodeAt() <= 57)){
//     alert("Given input is number");
// }

// Q:2 .Ans
// var num1 = +prompt("Enter 1st number","number");
// var num2 = +prompt("Enter 2nd number","number");
// if(num1 > num2){
//     alert(num1+" is larger than "+ num2);
// }
// else if(num2 > num1){
//     alert(num2+" is larger than "+ num1);
// }
// else{
//     alert(num1+" and "+ num2+" are equal");
// }

// Q:3 .Ans
// var num = +prompt("Enter any number","any number");
// if(num > 0){
//     alert( num+" is positive number");
// }
// else if(num < 0){
//     alert( num+" is negative number");
// }
// else{
//     alert( "given number is zero");
// }

// Q:4 .Ans
// var character = prompt("Enter a character for checking vowels","character");
// if(character.charAt(0).toLocaleLowerCase()==="a" || character.charAt(0).toLocaleLowerCase()==="e" || character.charAt(0).toLocaleLowerCase()==="i" || character.charAt(0).toLocaleLowerCase()==="o" || character.charAt(0).toLocaleLowerCase()==="u"){
//     alert("true");
// }
// else{
//     alert("false");
// }

// Q:5 .Ans
// var originalPass = "javascript";
// var givenPass = prompt("Enter your password");
// if (givenPass === "") {
//     alert("Please enter your password");
// }
// else if(givenPass===originalPass){
//     alert("Correct! The password you entered matches the original password.");
// }
// else{
//     alert("Incorrect password");
// }

// Q:6 .Ans
// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good day";
//     alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }

// Q:7 .Ans
// var time = +prompt("Enter time in 24 hour clock (ex: 1900 = 7pm)","time");
// if(time >= 0000 && time < 1200){
//     alert("Good morning!");
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good evening!");
// }
// else if(time >= 2100 && time <= 2359){
//     alert("Good night!");    
// }
// else{
//     alert("please give the time in this format like: 1300 and within a range 0000 to 2359");
// }

//==============================Chapter:12-13 end ==========================================


//==============================Chapter:14-16 Assignment start ==============================
// Q:1 .Ans
// var student = [];

// Q:2 .Ans
// var student = new Array();

// Q:3 .Ans
// var student = [];
// student[0] = "Muhammad Ali";
// student[1] = "Talha";
// student[2] = "Muhammad Saqib";

// Q:4 .Ans
// var number = [];
// number[0] = 232;
// number[1] = 543;
// number[2] = 466;

// Q:5 .Ans
// var boolean = [];
// boolean[0] = true;
// boolean[1] = false;

// Q:6 .Ans
// var mixedArry = [];
// mixedArry[0] = "Muhammad Ali";
// mixedArry[1] = 47456;
// mixedArry[2] = true;
// alert(mixedArry);

// Q:7 .Ans
// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M .Phil.","PhD"];
// document.writeln("<h1>Qualifications:</h1>"
//                  +"<h3> 1) "+qualification[0]+"<br>"
//                  +"2) "+qualification[1]+"<br>"
//                  +"3) "+qualification[2]+"<br>"
//                  +"4) "+qualification[3]+"<br>"
//                  +"5) "+qualification[4]+"<br>"
//                  +"6) "+qualification[5]+"<br>"
//                  +"7) "+qualification[6]+"<br>"
//                  +"8) "+qualification[7]+"</h3>");

// Q:8 .Ans
// var students = ["Michael","John","Tony"];
// var scores = [320,230,480];
// document.write("Score of "+students[0]+" is "+scores[0]+". Percentage : "
// +(scores[0]/500)*100+"%<br>"
// +"Score of "+students[1]+" is "+scores[1]+". Percentage : "
// +(scores[1]/500)*100+"%<br>"
// +"Score of "+students[2]+" is "+scores[2]+". Percentage : "
// +(scores[2]/500)*100+"%<br>");

// Q:9 .Ans
// var colorArry = ["green","red","yellow","blue"];
// document.writeln("<h2>Colors</h2>");
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (a)
// var addColor = prompt("Which color you want to add to the beginning enter the name","color name");
// colorArry.unshift(addColor);
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (b)
// var addColor = prompt("Which color you want to add to the end enter the name","color name");
// colorArry.push(addColor);
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (c)
// colorArry.unshift("white","black");
// for(var i= 0; i < colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (d)
// colorArry.shift();
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (e)
// colorArry.pop();
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (f)
// var index = +prompt("At which index you wants to add a color enter index number","index number");
// var colorName = prompt("Enter color name which you want to add","color name");
// if(index > -1 && index!= -0 && index < colorArry.length){
//     colorArry.splice(index,0,colorName);
// }
// else{
//     alert("Invalid index");
// }
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (g)
// var index = +prompt("Which index you wants to delete the color enter index number","index number");
// var num = +prompt("How many colors you want to delete enter number","enter number");
// if(index > -1 && num > -1 && num!= -0 && index!= -0 && num < colorArry.length  && index < colorArry.length){
//     colorArry.splice(index,num);
// }
// else{
//     alert("Invalid index or number");
// }
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// Q:10 .Ans
// var scores = [320,230,480,120];
// document.writeln("Scores of Students : "+scores[0]+","+scores[1]+","+scores[2]+","+scores[3]
//                  +"<br>Ordered Scores of Students : "+scores.sort());


//Q:11 .Ans
// var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var copy = city.slice(2,4);
// document.writeln("Cities list:<br>");
// for(var i=0; i < city.length; i++){
//     document.writeln(city[i]+",");
// }
// document.writeln("<br><br>Selected cities list:<br>"+copy[0]+","+copy[1]);

//Q:12 .Ans
// var arr = ["This", "is", "my", "cat"];
// var join = arr.join(" ");
// document.writeln("<h1>Array:<br>"
// +arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+"<br><br>"
// +"String:<br>"+join +"</h1>");

//Q:13 .Ans
// var devices = ["keyboard","mouse","printer","monitor"];
// document.writeln("Devices:<br>"
// +devices[0]+","+devices[1]+","+devices[2]+","+devices[3]+"<br><br>"
// +"Out:<br>"+devices.shift()+"<br>"+"Out:<br>"+devices.shift()+"<br>"
// +"Out:<br>"+devices.shift()+"<br>"+"Out:<br>"+devices.shift()+"<br>");

//Q:14 .Ans
// var devices = ["keyboard","mouse","printer","monitor"];
// document.writeln("Devices:<br>"
// +devices[0]+","+devices[1]+","+devices[2]+","+devices[3]+"<br><br>"
// +"Out:<br>"+devices.pop()+"<br>"+"Out:<br>"+devices.pop()+"<br>"
// +"Out:<br>"+devices.pop()+"<br>"+"Out:<br>"+devices.pop()+"<br>");

//Q:15 .Ans
// var manufacturer = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>"
// +"<option value="+manufacturer[0]+"\">"+manufacturer[0]+"</option>"
// +"<option value="+manufacturer[1]+"\">"+manufacturer[1]+"</option>"
// +"<option value="+manufacturer[2]+"\">"+manufacturer[2]+"</option>"
// +"<option value="+manufacturer[3]+"\">"+manufacturer[3]+"</option>"
// +"<option value="+manufacturer[4]+"\">"+manufacturer[4]+"</option>"
// +"<option value="+manufacturer[5]+"\">"+manufacturer[5]+"</option>"
// +"</select>");


//==============================Chapter:14-16 end ==========================================


//==============================Chapter:17-20 Assignment start ===========================
// Q:1 .Ans
// var arr = [[],[]];

//Q:2 .Ans
// var arr = [[],[],[]];
// arr[0] = [0,1,2,3];
// arr[1] = [1,0,1,2];
// arr[2] = [2,1,0,1];

//Q:3 .Ans
// for(var i = 1; i<=10; i++){
//     document.write(i+"<br>");
// }

//Q:4 .Ans
// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of "+table+"<br>Length "+length+"<br><br>");
// for(var i = 1; i <= length; i++){
//     document.write(table+" x "+i+" = "+(table*i)+"<br>");
// }

//Q:5 .Ans
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i]+"<br>");
// }
// document.write("<br><br>");
// for(var i = 0; i < fruits.length; i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }

//Q:6 .Ans
// 6: (a)
// document.write("<h3>Counting:</h3>");
// for(var i = 1; i <= 15; i++){
//     document.write(i+",");
// }

// 6: (b)
// document.write("<h3>Reverse counting:</h3>");
// for(var i = 10; i >= 1; i--){
//     document.write(i+",");
// }

// 6: (c)
// document.write("<h3>Even:</h3>");
// for(var i = 0; i <= 20; i++){
//     if(i%2==0){
//         document.write(i+",");
//     }
// }

// 6: (d)
// document.write("<h3>Odd:</h3>");
// for(var i = 0; i < 20; i++){
//     if(i%2==1){
//         document.write(i+",");
//     }
// }

// 6: (e)
// document.write("<h3>Series:</h3>");
// for(var i = 2; i <= 20; i += 2){
//     document.writeln(i+"k,");
// }

//Q:7 .Ans
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var index = -1; 
// for(var i=0; i < A.length; i++){
//     if(input.toLowerCase() === A[i]){
//         index = i;
//         break;
//     }
// }
// if(index > -1){
//     document.write(input.toLowerCase()+" is <b>available</b> at index "+index+" in our bakery");
// }
// else{
//     document.write("We are sorry."+ input.toLowerCase() +" is <b>not available</b> in our bakery");
// }

//Q:8 .Ans
// var A = [24, 53, 78, 91, 12];
// var large = A[0];
// document.write("Array items: ");
// for(var i = 0; i < A.length; i++){
//     document.write(A[i]+",");
//     if(A[i+1] > large){
//         large = A[i+1];
//     }
// }
// document.write("<br>The largest number is "+large);

//Q:9 .Ans
// var A = [24, 53, 78, 91, 12];
// var small = A[0];
// document.write("Array items: ");
// for(var i = 0; i < A.length; i++){
//     document.write(A[i]+",");
//     if(A[i+1] < small){
//         small = A[i+1];
//     }
// }
// document.write("<br>The smallest number is "+small);

//Q:10 .Ans
// for(var i = 1; i<=20; i++){
//     document.write(i*5+",");
// }

//==============================Chapter:17-20 end =======================================


