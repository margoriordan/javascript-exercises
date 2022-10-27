const sumAll = function(min,max) {  
    if (min < 0 || max < 0){
        return 'ERROR';
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return 'ERROR';
    }
    if (max < min){
        let temp = min;
        min = max;
        max = temp;
    }
    
    let sum = 0;
    for (let i = min; i <= max; i++){
    sum += i;  
    }
    return sum;
};

// const sumAll = function(...args){
// let sum = 0
// let first = args[0]
// let last = args[-1]
// let array = ''
// for (let i = args[0]; i < args[-1]; i++) {
//  
// }
// arg[0] + arg[0]+1 + arg[0]+2 + arg[0]+3...arg[0]+2(arg[-1])-1
// 


//function getAllNumbers(x,y) {
//let numbers = [];
//for (let i = x; i < y; i++){
//numbers.push(i)
//}
//}

//let sum = 0;
//for (let i = 0; i < numbers.length; i++){
//sum += numbers[i]   
//}
//return sum;
//
//
//
//
//
//
//
// Do not edit below this line
module.exports = sumAll;
