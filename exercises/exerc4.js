/*
[ 'red', 'green', 'blue', 'black' ]
[ 'blue', 'green', 'black' ]
[ 'yellow', 'blue', 'green', 'black' ]
*/ //output to be printed

let color=[];
color.push('red', 'green', 'blue');
color.push('black');
console.log(color);


color.shift();
color[0] = "blue";
color[1] = "green";
console.log(color);


color.unshift("yellow");
console.log(color);