//How recursion works and recursion vs iterative:
// function factorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++) {
//         fact = fact * i;
//         // console.log(i, fact);
//     }
//     return fact;
// }
// var zahurul = factorial(5);
// console.log(zahurul);

//recursion:
// function facturialRecur(num) {
//     if (num === 1) {
//         return 1;
//     } else {
//         return num * facturialRecur(num - 1);
//     }
// }
// var nadira = facturialRecur(5);
// console.log(nadira);

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

/**
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
*/

//Fibonacci Series
//1, 1, 2, 3, 5, 8, 13, 21, 34, 35;
function fibonacciIterative(num) {
    var fibo = [1, 1];
    for (var i = 2; i <= num; i++) {
        var nextFibo = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextFibo);
    }
    return fibo;
}
// var result = fibonacciIterative(10);
// console.log(result);

function fibonacciRecursive(num) {
    //Stopping condition
    if (num == 0) {
        return [1];
    }
    if (num == 1) {
        return [1, 1]
    }
    //Recursive call
    var fibon = fibonacciRecursive(num - 1);
    var nextFiboo = fibon[num - 1] + fibon[num - 2];
    fibon.push(nextFiboo);
    return fibon;

}
var result = fibonacciRecursive(10);
console.log(result);

//Assignments
// convert kilometer to meter:
function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        var noEpmty = 'No is empty';
        return noEpmty;
    } else {
        var result = kilometer * 1000;
        return result;
    }
}
kilometerToMeter(10);


// budget calculator:

//Define Product Price:
function budgetCalculator(monitor, tv, mobile) {
    var perMoniterPrice = 200;
    var perTvPrice = 100;
    var perMobilePrice = 50;
    var totalPrice = 0;
    //check if price is empty or negative:
    if ((monitor <= 0) || (monitor == "")) {
        // show warning
        var noEpmty = 'Please try this value';
        return noEpmty;
    } else {
        var totelMonitorPrice = monitor * perMoniterPrice;
        totalPrice += totelMonitorPrice;
    }
    if ((tv <= 0) || (tv == "")) {
        // show warning
        var noEpmty = 'Please try this value';
        return noEpmty;

    } else {
        var totalTvPrice = tv * perTvPrice;
        totalPrice += totalTvPrice;
    }
    if ((mobile <= 0) || (mobile == "")) {
        // show warning
        var noEpmty = 'Please try this value';
        return noEpmty;
    } else {
        var totalMobilePrice = mobile * perMobilePrice;
        totalPrice += totalMobilePrice;
    }
    return totalPrice;
}
var na = budgetCalculator(200)
console.log(na);
// calculate hotelCost:
// function hotelCost(days) {}


//  megaFriend() function
var student = ['Rohaim', 'Rahman', 'Rahul', 'Raddika'];

function megaFriend(zahurul) {

    let longWord = "";
    if (zahurul == "") {
        var noEpmty = 'no number';
        return noEpmty;
    } else {
        for (var i = 0; i < zahurul.length; i++) {
            if (zahurul[i].length > longWord.length) {
                longWord = zahurul[i].length;
            }
        }
    }
    return longWord;
}
var result7 = megaFriend(student);
console.log(result7)