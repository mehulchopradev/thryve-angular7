import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookType } from '../book-type';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges {

  bookList: BookType[];
  @Input() newBook: BookType;

  constructor(private http: HttpClient) {
    this.bookList = [];
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/books')
      .subscribe((data) => {
        this.bookList = data['books'];
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes.newBook
    if (!change.previousValue && change.currentValue) {
      this.bookList.push(change.currentValue);
    }
  }

}
