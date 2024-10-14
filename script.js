const myLibrary = []; //this is the list of books in the system
let numBooks = 0; //this is the number of books

function Book(title, author, genre, page_length=0, book_summary=""){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.page_length = page_length;
    this.book_summary = book_summary;
}

function isRepeatedBook(call_title, call_author){
    let found = false;
    myLibrary.forEach(book => {
        if(book.title.toUpperCase() == call_title.toUpperCase() 
            && book.author.toUpperCase() == call_author.toUpperCase())
            found = true;
    });
    return found;
}

function displayNewBook(){
    
}

document.addEventListener("DOMContentLoaded", ()=>{
    //start of execution
    const addBookForm = document.getElementsByClassName("add-book-form");
    const submitBook = addBookForm.elements["submit"];
    const clearForm = document.getElementsByClassName("clear");
    submitBook.addEventListener("click", (event)=>{
        event.preventDefault();

        //retrieve form data
        const bookTitle = addBookForm.elements["book-title"];
        const bookAuthor = addBookForm.elements["book-author"];
        const bookGenre = addBookForm.elements['input[name="genre"]:checked'];
        const bookPageLength = addBookForm.elements["book-length"];
        const bookSummary = addBookForm.elements["book-summary"];

        //form validation
        if(isRepeatedBook(bookTitle, bookAuthor)){
            alert("This is a repeated book. It will not be submitted.");
            return;
        }
        if (!bookGenre) {
            alert("A genre has not been selected. The book cannot be submitted.");
            return;
        }
        if(!bookPageLength)
            bookPageLength=0;
        if(!bookSummary)
            bookSummary="";
        //create book
        const newBook = Book(bookTitle, bookAuthor, bookGenre, bookPageLength, bookSummary);
        myLibrary.push(newBook);
        console.log(newBook);
    });

});