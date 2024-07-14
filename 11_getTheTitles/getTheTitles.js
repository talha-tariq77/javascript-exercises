const getTheTitles = function(bookObjects) {
    return bookObjects.map((val) => val.title);

    titles = [];
    for (book of bookObjects) {
        titles.push(book.title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
