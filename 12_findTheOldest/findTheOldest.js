const findTheOldest = function(peopleArray) {
    sortedArray = peopleArray.sort((a, b) => {
        aAge = typeof a.yearOfDeath == 'undefined'? 2024 - a.yearOfBirth: a.yearOfDeath - a.yearOfBirth;

        bAge = typeof b.yearOfDeath == 'undefined'? 2024 - b.yearOfBirth: b.yearOfDeath - b.yearOfBirth;

        return bAge - aAge;
    });

    return sortedArray[0];

    oldestAge = 0;
    oldestPerson = null;
    for (person of peopleArray) {

        if (typeof person.yearOfDeath != 'undefined') {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            age = 2024 - person.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestPerson = person;
            oldestAge = age;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
