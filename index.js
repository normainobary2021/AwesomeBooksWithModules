import Book from './modules/bookModule.js';
import Storage from './modules/storageModule.js';
import DomBooks from './modules/domModule.js';
import CurrentTime from './modules/timeModule.js';

const awesomeForm = document.querySelector('form');
const awesomeNavList = document.querySelector('.nav-list');
const awesomeNavAdd = document.querySelector('.nav-add');
const awesomeNavContact = document.querySelector('.nav-contact');
const awesomeAddBook = document.querySelector('.add');
const awesomeList = document.querySelector('.list');
const awesomeContact = document.querySelector('.contact');

// to display the time
CurrentTime.setTime();
document.querySelector('time').innerHTML = new Date().toLocaleString();

// listing books link
awesomeNavList.addEventListener('click', () => {
  awesomeList.classList.remove('hide');
  awesomeAddBook.classList.add('hide');
  awesomeContact.classList.add('hide');
});

// adding books link
awesomeNavAdd.addEventListener('click', () => {
  awesomeList.classList.add('hide');
  awesomeAddBook.classList.remove('hide');
  awesomeContact.classList.add('hide');
});

// contact link
awesomeNavContact.addEventListener('click', () => {
  awesomeList.classList.add('hide');
  awesomeAddBook.classList.add('hide');
  awesomeContact.classList.remove('hide');
});

document.addEventListener('DOMContentLoaded', DomBooks.displayBooksInDom);

awesomeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;

  const book = new Book(title, author);

  DomBooks.BooksList(book);

  Storage.BooksToStorage(book);

  Storage.checkEmptyList();

  DomBooks.clearField();
});

document.querySelector('#tbody').addEventListener('click', (e) => {
  DomBooks.deleteBook(e.target);

  Storage.removeFromStorage(
    e.target.parentElement.previousElementSibling.textContent,
  );
  Storage.checkEmptyList();
});