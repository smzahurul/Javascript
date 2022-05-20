// var promice = 'I promice I will work hard to becom a programmer';
// console.log(promice.toLowerCase());
// console.log(promice.toUpperCase());
// console.log(promice.indexOf('will'));
// console.log(promice.split('i'));
// console.log(promice.split(' '));

// var jobPayco= true;
// var savingAmount=50000;

// if(jobPayco== true && savingAmount==200000){
//     console.log('Tomar jonno patri dhakci')
// }
// else if (jobPayco== true ) {
//     console.log('Amra try korc tor beyar jonno');
// }
// else{
//     console.log('Tor copala baya ni');
// }

// var biscuitPrice = 12;
// if (biscuitPrice < 10) {
//     console.log('Eatting biscuit')
// } else {
//     console.log('Only eating tea')
// }

// var number1 = 20;
// var number2 = 30;
// var fName = 'SM Zahurul';
// var lastName = 'Islam'
// var fullName = fName + ' ' + lastName;
// console.log(fullName);
// number1++;
// number1--;
// var result = number1 + number2;
// var result = number2 - number1;
// var result = number1 * number2;
// var result = number2 /number1;
// var result = number1 % number2
// console.log(result);

// var number = 0.1;
// var number1 = 0.2;
// number1 = parseInt(number1);
// number1 = + number1
// number = ''+number
// var total = number + number1;
// total = total.toFixed(1)
// console.log(total);

// var number = 25;
// var number1 = -5;
// var absoluteNumber = Math.abs(number1);
// var absoluteNumber = Math.round(number);
// var absoluteNumber = Math.ceil(number);
// var absoluteNumber = Math.floor(number);
// var absoluteNumber = Math.random()*25;
// absoluteNumber = Math.round(absoluteNumber);
// console.log(absoluteNumber);

// Array
// var friendsAge = [14, 15, 16, 17, 18];
// var nadiraAge = friendsAge[2];
// friendsAge[1] = 21;
// var position = friendsAge.indexOf(18);
// console.log(position);
// console.log(nadiraAge);
// console.log(friendsAge[1]);
// console.log(friendsAge);
// console.log(friendsAge);
// friendsAge.push(20, 22);
// console.log(friendsAge);
// console.log(friendsAge.length);
// var teaLine = ['Korim', 'Rahim', 'Balam',];
// console.log(teaLine);

// // teaLine.shift();
// // console.log(teaLine);

// teaLine.unshift('Jalam', 'Jamal');
// console.log(teaLine);

// teaLine.push('Jabib');
// console.log(teaLine);

// var lengthArray = teaLine.length;
// console.log(lengthArray);

// var jamalIndex = teaLine.indexOf('Jamal');
// console.log(jamalIndex);

// var korimIndex = teaLine.indexOf('Korim');
// console.log(korimIndex);

// console.log(teaLine);

// var part = teaLine.slice(2, 5);
// console.log(part);

// console.log(teaLine.length);

// // While Loop

// var num = 0;
// while(num < 15){
//     console.log(num);
//     num ++;
// }
//  var a = 1;
//  while(a <= 20){
//      console.log(a);
//      a++;
//  }

// //  For Loop

// for(var i = 0; i < 15; i++){
//     console.log(i);
// }

// for(var zahurul = 0; zahurul <= 7; zahurul++){
//     console.log(zahurul);
// }

// var nums = [11, 13, 45, 56, 60, 80, 90, 100]
// for(var nadira = 0; nadira < nums.length; nadira++){
//     var elements = nums[nadira];
//     console.log(elements);
// }

// var frendsName =['Rana', 'Sohel', 'Yousuf', 'Rashel', 'Faruk'];
// for(k = 0; k < frendsName.length; k++){
//     var myFrends = frendsName[k];
//     console.log(myFrends);
// }

// var fruits =['Mango', 'Apple', 'Banana', 'Orange', 'Grapes', 'Jackfruit', 'Coconut']
// for(z = 0; z < fruits.length; z++){
//     var fruitsName = fruits[z];
//     console.log(fruitsName);
// }

// Grade CGPA else if:
var mark = 40;
if (mark >= 80) {
    console.log('A+');
} else if (mark >= 70) {
    console.log('A')
} else if (mark >= 60) {
    console.log('A-')
} else if (mark >= 50) {
    console.log('B+');
} else if (mark >= 45) {
    console.log('B');
} else if (mark >= 40) {
    console.log('C');
} else if (mark >= 33) {
    console.log('D');
} else {
    console.log('Tray again')
}

// else if Statements:
var date = new Date();
var today = date.getDay();

if (today === 0) {
    console.log('Today is Sunday');
} else if (today === 1) {
    console.log('Today is Monday');
} else if (today === 2) {
    console.log('Today is tuesday');
} else if (today === 3) {
    console.log('Today is Wednesday');
} else if (today === 4) {
    console.log('Today is Thursday');
} else if (today === 5) {
    console.log('Today is Friday');
} else if (today === 6) {
    console.log('Today is Saturday');
} else {
    console.log('This Number Is Invalid');
}

// Switch Statements:
var date = new Date();
var today = date.getDay();

switch (today) {
    case 0:
        console.log('Today Is Sunday');
        break;
    case 1:
        console.log('Today Is Monday');
        break;
    case 2:
        console.log('Today Is Tuesday');
        break;
    case 3:
        console.log('Today Is Wednesday');
        break;
    case 4:
        console.log('Today Is Thursday');
        break;
    case 5:
        console.log('Today Is Friday');
        break;
    case 6:
        console.log('Today Is Saturday');
        break;
    default:
        console.log('This Number Is Invalid');
}

var number = 100;
switch (number) {
    case 50:
        console.log('Mango');
        break;
    case 60:
        console.log('Banana');
        break;
    case 70:
        console.log('Papiya');
        break;
    case 80:
        console.log('Apple');
        break;
    case 90:
        console.log('Grape');
        break;
    case 100:
        console.log('Bangladesh');
    default:
        console.log('I Love You');
}

// Function
function sayLoveYou() {
    console.log('My Bangla Of Gold I love You,');
    console.log('Time and tide wite for none,');
    console.log('Thats your caravan just for oneday.');
    console.log('My Country name Bangladesh.');
    console.log('My Village Islam pru,');
}
sayLoveYou();

var nadira = 'Mango is favorite fruits,'
console.log(nadira);

function nadiraIslam() {
    console.log('My Description Below:');
    console.log('My name is Miss. Nadira Islam.')
    console.log('My Husband name S M Zahurul Islam.');
    console.log('My Village name Islam pur,');
    console.log('My Country Name Bangladesh,');
}
nadiraIslam();

function Kanchon(num) {
    var result = num * 2;
    return result
}
var first = Kanchon(5);
var second = Kanchon(10);
var nadira = Kanchon(20);
console.log(first);
console.log(second);
console.log(nadira);

function love(hateyou) {
    var result = hateyou * 2;
    return result
}
var a = love(22);
var b = love(11);
console.log(a, b);
// console.log(b);

function add(num1, num2) {
    var result = num1 + num2;
    return result
}
var sum = add(25, 20);
console.log(sum);

// Object

var student = { ID: 121, Phone: 147512345, Class: 'Five', Name: 'Nadira' };
var student2 = { ID: 123, Phone: 174212356, Class: 'Eight', Name: 'Kanchon' };
var phoneProNumber = 'Phone';
var PhoneNumber = student[phoneProNumber];
// var PhoneNumber = student['Phone'];
// var PhoneNumber = student.Phone;
var studentName = student.Name;
var studentClass = student2.Class;

// updatwe and change property:
student.Phone = 555555;
student['Phone'] = 77777;
// Property Add and Update:
student.Roll = 2;
student2.Roll = 1;
console.log(studentClass);
console.log(studentName);
console.log(PhoneNumber);
console.log(student);
console.log(student2);