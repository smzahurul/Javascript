var date = new Date()
var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Manday');
        break
    case 2:
        console.log('Today is Tuesday');
        break
    case 3:
        console.log('Today is Wenesday');
        break
    case 4:
        console.log('Today is Thasday');
        break
    case 5:
        console.log(`Today is Friday`);
        break
    case 6:
        console.log('Today is Saterday');
        break
    default:
        ('This number is invalid')
}
// switch (today) {
//     case 0:
//         console.log('This Month January')
//         break
//     case 1:
//         console.log('This Month Of February')
//         break
//     case 2:
//         console.log('This Month Of March')
//         break
//     case 3:
//         console.log('This Month Of April')
//         break
//     case 4:
//         console.log('This Month Of May')
//         break
//     case 5:
//         console.log('This Month Of June')
//         break
//     case 6:
//         console.log('This Month Of July')
//         break
//     case 7:
//         console.log('This Month Of Augost')
//         break
//     case 8:
//         console.log('This Month Of September')
//         break
//     case 9:
//         console.log('This Month Of Ocrober')
//         break
//     case 10:
//         console.log('This Month Of Novembar')
//         break
//     case 11:
//         console.log('This Month Of December')
//         break

// }

// Function
// function dubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const num1 = dubleIt(10);
// console.log(num1);
// let num2 = dubleIt(20);
// console.log(num2)
// const num3 = dubleIt(30);
// console.log(num3);

// function sayLove(num, num1) {
//     const result1 = num + num1;
//     return result1;
// }
// let rohim = sayLove(10, 20);
// console.log(rohim);
// let korim = sayLove(20, 30);
// console.log(korim);
// let kuddus = sayLove(30, 40);
// console.log(kuddus);

// function inchToFeet(inch) {
//     const feet = inch / 12;
//     return feet;
// }
// const balam = inchToFeet(60);
// console.log('Feet:', balam);
// let kalam = inchToFeet(77);
// kalam = kalam.toFixed(2)
// console.log('Feet:', kalam);
// let jalam = inchToFeet(77);
// jalam = Math.round(jalam)
// console.log('Feet:', jalam);

// function feetToInch(feet) {
//     let inch = feet * 12;
//     return inch;
// }
// const teline = feetToInch(5);
// console.log('Inch:', teline);
// const lineman = feetToInch(10);
// console.log('Inch:', lineman);

// Object
// const nadira = { Name: 'Nadira', LastName: 'Islam', Phone: 123, };
// console.log(nadira);
// nadira.Phone = 234;
// console.log(nadira);
// nadira.address = 'Islam Pur'
// console.log(nadira);
// nadira.Post = 'Samas para'
// console.log(nadira);

// // lepyear
// function leapYear(year) {
//     return (year % 4 === 0) || (year % 400 === 0) && (year % 100 !== 0);

// }
// const a = leapYear(2000);
// console.log(a);
// const b = leapYear(2001);
// console.log(b);
// const c = leapYear(2002);
// console.log(c);
// const d = leapYear(2003);
// console.log(d);
// const e = leapYear(2004);
// console.log(e);
// const g = leapYear(2006);
// console.log(g);

// function mathFactor(factor) {
//     for (let i = 0; i <= 10; i++)
//         let mtiks = factor * i
//     return mtiks;
// }

// vat na = mathFactor(10);
// console.log(na);

// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];
// console.table(activities);

// factorial for Loop:
// var fact = 1;
// for (i = 1; i <= 5; i++) {
//     fact = fact * i;
//     console.log(i, fact);
// }
// function add for factorial
// function facto(n) {
//     var fact = 1;
//     for (i = 1; i <= 5; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// var result = facto(5);
// console.log(result);

// while loop for factorial
// var i = 1;
// var fact = 1;
// while (i <= 5) {
//     fact = fact * i
//     console.log(i, fact);
//     i++;
// }

// function factor(n) {
//     var i = 1;
//     var fact = 1;
//     while (i <= n) {
//         fact = fact * i
//             // console.log(i, fact);
//         i++;
//     }
//     return fact;
// }
// var result7 = factor(5);
// console.log(result7);

// function recorsive(n) {
//     if (recorsive == 0) {
//         return 1;
//     } else {
//         return n * recorsive(n - 1);
//     }
// }
// var result = recorsive(7);
// console.log(result);

// Swap Variables
var a = 7;
var b = 5;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

var z = 7;
var y = 6;
[z, y] = [y, z];
console.log(z, y);

function kilometerToMeter(kilometer) {
    var result = kilometer / 1000;
    return result;

}
var r = kilometerToMeter(7);
console.log('kilometer =', r);

function meterToKilometer(meter) {
    var res = meter * 1000;
    return res;

}
var z = meterToKilometer(4)
console.log('Meter = ', z);