// rest parameters = (...rest) allow a function work with a variable number of argument  
//   by bunding them into an array



function rawfoods(...foods){
    console.log(...foods)
}
rawfoods("chauchau","noodles","biscuit");