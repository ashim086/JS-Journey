/* we will learn array in here how to push or pop values;

to declear array
let aeroplanes=[];
let aeroplanes=["boeing","white body "];

for pushing
1.push()//it deletes elements from back
2.unshift()//it delets the element from headd

for pop
1.pop()//it deletes elements from back
2.shift()//it delets the element from headd

to identify the position in array
1.indexof(harry);

to identify length of array
aeroplane.length;

*/


let helicopter=[];//it can be initialized like this also
let aeroplanes=["boeing","white body "];
aeroplanes.push("white body2","white body 3");
aeroplanes.indexOf("boeing");
aeroplanes.unshift("i am element added from head ");
console.log(aeroplanes);

//pop
aeroplanes.pop();
aeroplanes.pop("i am element added from head");//it doesnot remove particular elment of array;
aeroplanes.shift();
console.log(aeroplanes);

//intialize position of arrey
let position=aeroplanes.indexOf("i am element added from head ");
console.log(position);

//length of array
console.log(aeroplanes);
console.log(aeroplanes.length);