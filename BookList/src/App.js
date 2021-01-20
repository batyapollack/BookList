import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import books from './books.png';


function App() {
  //useState
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [bookId, setBookID] = useState(null);
  const [bookList, setBookList] = useState([
    {
    bookTitle: "HARRY POTTER",
    bookAuthor: "ROWLING", 
    bookIsbn: "1111", 
    bookId: uuidv4(),
    },
  {  
    bookTitle:  "FALLING KINGDOMS",
    bookAuthor: "RHODES, MORGAN", 
    bookIsbn: "1212", 
    bookId: uuidv4(),
   
  }
]);

const addBook = () => {
  setBookList([...bookList, {
    bookTitle: title,
    bookAuthor: author,
    bookIsbn: isbn,
    bookId: uuidv4(),
  },])
}

const inputInvalid =() => {
return (title.trim() ==='' || author.trim() ==='' || isbn.trim() ==='') ;
}

const clearInput = () => {

  setTitle('');
  setAuthor('');
  setIsbn('');
}
const updateBook = () => {
    setBookList(bookList.map((book)=>
     book.bookId === bookId ? 
     {...bookList, bookTitle: title, bookAuthor: author, bookIsbn: isbn}
     : book
    )
    );
};

const handleSubmit =(e) => {
  e.preventDefault();
  if(inputInvalid()) 
  {
    clearInput();
    return;
  }
  clearInput();
  setBookID(null)
  if(bookId !==null)
    updateBook();
  else
    addBook();
};

const removeBook = (id) => {
setBookList(bookList.filter((book)=> id !== book.bookId));
}

const editBook = (book) => {
  setTitle(book.bookTitle)
  setAuthor(book.bookAuthor)
  setIsbn(book.bookIsbn)
  setBookID(book.bookId);
}

const cancelEdit = () => {
  clearInput();
  setBookID(null);
}

  return (
    <div className="App">
      <div className= "container">
      <div className="title"> 
        <img src={books}/>
        <h2> Book List </h2>
        <h5> Please input a name, author and ISBN of the book</h5>
      </div>
       <hr/>
        <Form 
          title = {title}
          setTitle ={setTitle}
          author = {author}
          setAuthor ={setAuthor}
          isbn = {isbn}
          setIsbn = {setIsbn}
          bookId = {bookId}
          handleSubmit = {handleSubmit}
          cancelEdit = {cancelEdit}
        />
        <Table 
          bookList ={bookList}
          removeBook ={removeBook}
          editBook ={editBook}
        />
      </div>
    </div>
  );
}

export default App;
