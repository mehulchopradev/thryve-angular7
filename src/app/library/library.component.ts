import { Component, OnInit } from '@angular/core';
import { BookType } from '../book-type';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  showBookForm: boolean;
  newBook: BookType;

  constructor() {
    this.showBookForm = false;
  }

  ngOnInit() {
  }

  addBook() {
    this.showBookForm = true;
  }

  onNewBook(book) {
    this.newBook = book;
  }
}