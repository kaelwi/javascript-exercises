const removeFromArray = function(array, ...elements) {
    return array.filter(it => !elements.includes(it));

};

// Do not edit below this line
module.exports = removeFromArray;
