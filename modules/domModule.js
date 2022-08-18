import Storage from './storageModule.js';

export default class DomBooks {
  static displayBooksInDom() {
    Storage.checkEmptyList();
    const books = Storage.BooksFromStorage();

    books.forEach((book) => DomBooks.BooksList(book));
  }

  static BooksList(book) {
    const tbody = document.querySelector('#tbody');
    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `
      <td>${`"${book.title}"`}</td>
      <td>by</td>
      <td>${book.author}</td>
      <td><a href="#" class='rm-button'>Remove</a></td>
      `;
    tbody.appendChild(tableRow);
  }

  static deleteBook(el) {
    if (el.classList.contains('rm-button')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
  }
}