const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        let currentAge =  current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : new Date().getFullYear() - current.yearOfBirth;
        return oldestAge > currentAge ? oldest : current;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
