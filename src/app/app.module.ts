import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodosComponent } from './todos/todos.component';
import { TitlePipe } from './title.pipe';
import { LibraryComponent } from './library/library.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TodosComponent,
    TitlePipe,
    LibraryComponent,
    NavbarComponent,
    CalcResultsComponent,
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
