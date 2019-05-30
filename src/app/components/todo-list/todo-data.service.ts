import { TodoListItem } from './models';
import { Observable, BehaviorSubject } from 'rxjs';


export class TodoDataService {

  private data: TodoListItem[] = [
    { description: 'Fix front door', completed: false },
    { description: 'Change LED bath lights', completed: false },
    { description: 'Kill thistles', completed: true }
  ];

  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);

  getTodoList(): Observable<TodoListItem[]> {
    const observable = this.todoListSubject.asObservable();

    return observable;
  }

  add(what: string) {
    // really call the api ... but we're faking it.
    this.data = [{ description: what, completed: false }, ...this.data];
    this.todoListSubject.next(this.data);
  }
}
