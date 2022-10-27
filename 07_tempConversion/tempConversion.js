const ftoc = function(tempC) {
let newTempC = (tempC-32)*(5/9);
let roundTempC = Math.round(newTempC*10)/10;
return roundTempC;
};

const ctof = function(tempF) {
  let newTempF = (((9*tempF)/5)+32);
  let roundTempF = Math.round(newTempF*10)/10;
  return roundTempF;
};

// F = (x-32)(5/9)
// C = (9/5)x+32

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
