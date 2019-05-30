import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListItem } from './models';
import { TodoDataService } from './todo-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  title = 'Your Todo List';

  items$: Observable<TodoListItem[]>;
  // items: TodoListItem[];
  // subscription: Subscription;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getTodoList();

    // this.items$.subscribe(tdl => {
    //   console.log('Got a new todolist!', tdl);
    //   this.items = tdl;
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  markComplete(item: TodoListItem) {
    // item.completed = true;
    // call the service
  }

  add(what: string) {
    // this.items.unshift({ description: what, completed: false });
    // TODO: a call to the service to add this nes Todo
    this.service.add(what);
  }

  clearCompleted() {
    // this.items = this.items.filter(item => item.completed === false);
    // this.items = this.items.filter(item => item.completed !== true);
  }

  unClearAllCompleted(what: string) {
    // this.items.forEach(item => item.completed = false);
  }
}
