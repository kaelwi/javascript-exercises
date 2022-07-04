const sumAll = function(from, to) {
    if (typeof(from) != typeof(to)) {
        return 'ERROR';
    }
    if (from < 0 || to < 0) {
        return 'ERROR';
    }

    let sum = 0;
    let temp;

    if (from > to) {
        let temp = to;
        to = from;
        from = temp;
    }

    while (from <= to) {
        sum += from;
        from++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
