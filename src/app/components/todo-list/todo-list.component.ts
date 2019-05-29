import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'Your Todo List';

  items: TodoListItem[] = [
    { description: 'Fix front door', completed: false },
    { description: 'Change LED bath lights', completed: false },
    { description: 'Kill thistles', completed: true }
  ];
  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(what: HTMLInputElement) {
    console.log(what.value);
    this.items.unshift({ description: what.value, completed: false });
    what.value = '';
    what.focus();
  }

  clearCompleted() {
    // this.items = this.items.filter(item => item.completed === false);
    this.items = this.items.filter(item => item.completed !== true);
  }
}
