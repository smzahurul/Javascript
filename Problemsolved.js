// 1.Swap variable, swap without temp, destructing:
// var a = 60;
// var b = 70;
// console.log('Before Swap : A=', a + ' , ' + 'B = ', b);
// var temp = a;
// a = b;
// b = temp;
// console.log('Aftter Swap : A=', a + ' , ' + 'B = ', b);

// var c = 7;
// var d = 6;
// c = c + d;
// d = c - d;
// c = c - d;
// console.log('Aftter Swap : C =', c + ' , ' + 'D = ', d);

// var p = 11;
// var q = 10;
// [p, q] = [q, p];
// console.log('Aftter Swap : P=', p + ' , ' + 'Q = ', q);

//2.Random number, random number between 1 to 6:

// var a = 4.4555;
// var result = Math.ceil(a);
// var result1 = Math.round(a);
// var result2 = Math.floor(a);
// var result3 = Math.random() * 7;
// var randomeNum = Math.round(result3);
// console.log(randomeNum);

//3.Find max of two values, find max of three values;
/** 
var business = 450;
var minister = 400;
var sochib = 520;
var max = Math.max(business, minister, sochib);
console.log(max)

        if (business > minister) {
        if (buiness > sochib) {
            console.log('business is Bigger,');
        } else {
            console.log('Sochib is Bigger,');
        }
    } else {
        if (minister > sochib) {
            console.log('minister is Bigger,');
        } else {
            console.log('Sochib is Bigger,');
        }
    }
    */


// Find the largest element of an array:
/**var marks = [45, 60, 90, 80, 85];
var max = marks[0];
for (var i = 1; i <= marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }

}
console.log(max);

var total = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var sum = 0;
for (var i = 0; i < total.length; i++) {
    var element = total[i];
    if (element > sum) {
        sum = element;
    }

}
console.log(sum);
*/

// Sum of all numbers in an array:
/**
var total = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var sum = 0;
for (var i = 0; i < total.length; i++) {
    var element = total[i];
    sum = sum + element;

}
console.log(sum);
*/
/**
function arrayTotalsum(total) {
    sum = 0;
    for (var i = 0; i < total.length; i++) {
        var element = total[i];
        sum = sum + element;

    }
    return sum;
}
var total = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var result = arrayTotalsum(total);
console.log(result);

var rollNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var result1 = arrayTotalsum(rollNum);
console.log(result1);
*/

// Remove duplicate item from an array:
// var name1 = [1, 2, 5, 4, 4, 3, 2, 6, 7, 8, 9, 4, 5, 8, 10, 11];
// var uniqueName = [];
// for (var i = 0; i < name1.length; i++) {
//     var element = name1[i];
//     console.log(element);
//     var index = uniqueName.indexOf(element);
//     if (index == -1) {
//         uniqueName.push(element);
//     }
// }
// console.log(uniqueName);

//Count the number of words in a string:
/** 

var speech = 'My bangla of gild i love you';
var count = 0;
for (var i = 0; i < speech.length; i++) {
    var latter = speech[i];
    if (latter == " ") {
        count++;
    }
}
count++;
console.log(count);
*/

/** 
var speech = 'My   bangla of gild i love you';
var count = 0;
for (var i = 0; i < speech.length; i++) {
    var latter = speech[i];
    if (latter == " " && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);
*/

// Reverse a string:
/** 
function revarsString(str) {
    var revers = "";
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        revers = element + revers;

    }
    return revers;

}
var speech = 'My bangla of gild i love you';
var forAlin = revarsString(speech);
console.log(forAlin);
*/

//How recursion works and recursion vs iterative:
function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}
var zahurul = factorial(5);
console.log(zahurul);

//recursion:
function facturialRecur(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * facturialRecur(num - 1);
    }
}
var nadira = facturialRecur(5);
console.log(nadira);

// Travelling in a Jungle and counting wild animals:
/**
var depth = 10;
var animals = 0;
if (depth <= 10) {
    animals = depth * 50;
} else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animals = firstPart + secondPart;
} else {
    var firstPart = 10 * 50;
    var secondPart = 20 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animals = firstPart + secondPart + thirdPart;
}
console.log(animals);
*/

function tigerBd(miles) {
    var tiger = 0;
    if (miles <= 10) {
        tiger = miles * 50;
    } else if (miles <= 20) {
        var firstLook = 10 * 50;
        var remaining1 = miles - 10;
        var secondLook = remaining1 * 100;
        tiger = firstLook + secondLook;
    } else {
        var firstLook = 10 * 50;
        var secondLook = 20 * 100;
        var remaining1 = miles - 20;
        var thirdLook = remaining1 * 300;
        tiger = firstLook + secondLook + thirdLook;

    }
    return tiger;
}
var count = tigerBd(10);
console.log(count);