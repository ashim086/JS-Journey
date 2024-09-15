// arrow function = a conise way to write function expression
//               good for simple function that you use only once
//               (parameters) => some code;


const numbers =[1,2,3,4,5,6];


const squares = numbers.map((element)=>Math.pow(element,2));
const cubes = numbers.map((element) =>Math.pow(element,3));
const evennumbers = numbers.filter((element) => element%2===0);
const oddnums =numbers.filter((element) => element % 2 !==0);
const total = numbers.reduce((accumulator,element) => accumulator + element);




console.log(total);