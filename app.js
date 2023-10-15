// Object Constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        const readStatus = this.read ? "read" : "not read yet";
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`);
    }
};

// Library Array to hold Book Objects
const myLibrary = [];

// Takes user input & adds Book Object to Library Array
function addBookToLibrary() {
    let titleInput = prompt("Book title: ");
    let authorInput = prompt("Author: ");
    let pagesInput = prompt("Nr of Pages: ");
    let hasReadInput = prompt("Have you read the book? (y/n): ");
    let hasRead = hasReadInput.toLowerCase() === "y" ? true : false;

    newBook = new Book(titleInput, authorInput, pagesInput, hasRead);
    myLibrary.push(newBook);
}

// testing
bookOne = new Book("book one", "author one", 1, true);
bookTwo = new Book("book two", "author two", 2, false);
bookThree = new Book("book three", "author three", 3, true);

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);

function displayBook() {
    
}