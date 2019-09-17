var inputkeyboard = require('readline-sync')
var nilai = inputkeyboard.question("masukan nilai")
const a = 100;

if (nilai+a > 70) {
    console.log("LULUS")
} else {
    console.log("TIDAK LULUS")
}