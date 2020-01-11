import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookType } from '../book-type';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  newBook: BookType;
  @Output() onNewBook = new EventEmitter<BookType>();

  constructor(private http: HttpClient) {
    this.newBook = {
      title: '',
      price: null,
      pages: null,
    };
  }

  ngOnInit() {
  }

  onSave() {
    const newBook = this.newBook;
    this.http.post('http://localhost:3000/books', {
      book: newBook
    }).subscribe((data: BookType) => {
      this.onNewBook.emit(data);

      this.newBook = {
        title: '',
        price: null,
        pages: null,
      };
    });
  }

}
