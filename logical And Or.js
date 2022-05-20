var a = 40
var b = 30
var c = 20
var d = 10

// And Operator && :
if (a > b && c > d) {
    console.log('A Greater Then B And C Grater Then D');
} else {
    console.log('One Condiction Uneven');
}
if (a > b && c < d) {
    console.log('A Greater Then B And C Grater Then D');
} else {
    console.log('Second Condiction Uneven');
}

// Or Operator || :
if (a > b || c > d) {
    console.log('A grater Then B Or C Grater Then D');
} else {
    console.log('Two Vale Is Uneven');
}
if (a > b || c < d) {
    console.log('A grater Then B Or C les Then D');
} else {
    console.log('Two Vale Is Uneven');
}
// Not Operator ! :
var notOp = (a > b)
console.log(notOp);

// Same Vale ! Operator True Valu Falus convart :

var notOperator = !(a > b)
console.log(notOperator);

// Same Vale !! Operator false valu true valu convart :
var notO = !!(a > b)
console.log(notO);