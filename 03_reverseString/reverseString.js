const reverseString = function(word) {
    let splitString = word.split('');
    let reversedArray = splitString.reverse();
    let backwardsString = reversedArray.join('')
    let final = backwardsString.toString();
    return final;   
};

// Do not edit below this line
module.exports = reverseString;
