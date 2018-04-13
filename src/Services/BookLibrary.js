class Book {
    constructor(title, author, genre, rating) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.rating = parseInt(rating);
    }
}

let books = [];

function addBook(title, author, genre, rating) {
    books.push(new Book(title, author, genre, rating));
}

function getBooks() {
    return books;
}

function clearBooks() {
    books = [];
}

export default {addBook, getBooks, clearBooks};