import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingListItem } from '../../models';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { } from '';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() list: ShoppingListItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(what: HTMLInputElement) {
    // todo: DISPATCH
    what.value = '';
    what.focus(); // put the cursor back in it

  }

}
