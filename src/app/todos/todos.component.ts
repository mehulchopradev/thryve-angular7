import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoList: Todo[];
  newTodo: string;

  constructor() {
    this.todoList = [];
    this.newTodo = '';
  }

  ngOnInit() {
  }

  onSave() {
    const newTodo = this.newTodo;
    this.todoList.push(new Todo(newTodo, false, new Date()));
    this.newTodo = '';
  }

  onClearCompleted() {
    const notCompleted = this.todoList.filter(todo => !todo.done);
    this.todoList = notCompleted;
  }

  shouldDisableClear() {
    const completed = this.todoList.filter(todo => todo.done);
    return completed.length === 0;
  }
}
