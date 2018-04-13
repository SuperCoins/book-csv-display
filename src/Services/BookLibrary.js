/**
 * A Class representing a Book
 */
class Book {
    /**
     * TODO: Expand to allow for multiple authors and multiple genres
     * @param {string} title - The title of the book
     * @param {string} author - The author of the book
     * @param {string} genre - The genre of the book
     * @param {number} rating - The numerical rating of the book
     */
    constructor(title, author, genre, rating) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.rating = parseInt(rating);
    }
}

let books = [];

//TODO: Consider whether it's better to make this function take in a Book class as a parameter, rather than all the properties
/**
 * Add a book to the book library
 * @param {string} title 
 * @param {string} author 
 * @param {string} genre 
 * @param {nuber} rating 
 */
function addBook(title, author, genre, rating) {
    books.push(new Book(title, author, genre, rating));
}

/**
 * A function that returns the array of books
 * @returns {Book[]}
 */
function getBooks() {
    return books;
}

/**
 * Clear all the books in the library. We set it to an empty array so that we don't mutate the array of books that other components might have obtained by calling the getBooks function from this service
 */
function clearBooks() {
    books = [];
}

export default { addBook, getBooks, clearBooks };