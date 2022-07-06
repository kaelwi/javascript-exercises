const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	if (array.length == 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return parseInt(sum);
};

const multiply = function(array) {
  if (array.lenght == 0) {
    return 0;
  }

  let res = 1;
  for (let i = 0; i < array.length; i++) {
    res *= array[i];
  }

  return res;
};

const power = function(a, b) {
  if (b == 0) {
    return 1;
  }

	let res = 1;
  for (let i = 0; i < b; i++) {
    res *= a;
  }

  return res;
};

const factorial = function(a) {
  if (a == 0 || a == 1) {
    return 1;
  }

  return a * factorial(a - 1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
