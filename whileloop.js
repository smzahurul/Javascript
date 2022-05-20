var n = 0
while (n < 5) {
    console.log('Winner Winner Chicken Dinnar');
    n++
}

var okRunning = true
while (okRunning) {
    console.log(okRunning)
    okRunning = false

}
// var result = ''
// var i = 0
// do {
//     i = i + 1;
//     result = result + i;

// } while (i < 5)
// console.log(result)

var result = ' '
var i = 0
do {
    i += 1
    result += i + ' ';
} while (i > 0 && i < 5)
console.log(result);

// var i = 0
// do {
//     i += 1;
//     console.log(i + ' banglades');
// } while (i = 1; i <= 10; i++)

var a = '1000'
var b = 10

console.log(Number.parseInt(a + b))
console.log(b.toString())