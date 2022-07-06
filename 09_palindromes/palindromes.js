const palindromes = function (word) {

    word = word.replace(/[^A-Za-z]/g, '');
    word = word.toLowerCase();

    let half = Math.ceil(word.length / 2);

    for (let i = 0; i <= half; i++) {
        if (word.charAt(i) !== word.charAt(word.length-i-1)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
