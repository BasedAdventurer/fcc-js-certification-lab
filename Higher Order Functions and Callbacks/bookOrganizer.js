// Build a Book Organizer

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
// User Stories:
// 1. You should have an array of objects named books where each object in the array should have a string title,
//    another string authorName, and a number releaseYear.
// 2. Your books array should have a minimum of three objects.
// 3. You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.
// 4. The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of second book.
// 5. The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the
//    second book.
// 6. The sortByYear function should return 0 if both releaseYear values are equal.
// 7. You should filter out books written after a certain year such as 1950 from the books array and save the
//    filtered array in a new array named filteredBooks.
// 8. You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You
//    learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array
//    will be mutated.

const books = [
    {
        title: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        releaseYear: 1925
    },
    {
        title: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        releaseYear: 1960
    },
    {
        title: "1984",
        authorName: "George Orwell",
        releaseYear: 1949
    },
    {
        title: "The Hobbit",
        authorName: "J.R.R. Tolkien",
        releaseYear: 1937
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        authorName: "J.K. Rowling",
        releaseYear: 1997
    }
];

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1;
    }
    return 0;
}

const filteredBooks = books.filter((book) => book.releaseYear >= 1950).sort(sortByYear);

console.log(filteredBooks);
