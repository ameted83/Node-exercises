import clc from "cli-color"
let sum = (a, b) => a + b

console.log (clc.yellow("The sum is: " + sum(5, 6)))

export default sum
