import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {
  0
  @Effect({ dispatch: false }) saveCountBy$ = this.actions$
    .pipe(
      ofType(counterActions.SET_COUNT_BY), // Action
      map(a => a as counterActions.CountBySet), // CountBySet
      map(a => a.by.toString()), // "3"
      tap(count => localStorage.setItem('count-by', count)),
      tap(a => console.log('Effect got an action of type ${a.type}'))
    );

  @Effect() readCountBy$ = this.actions$
    .pipe(
      // filter(a => a.type === applicationActions.APP_START),
      ofType(applicationActions.APP_START),
      map(() => localStorage.getItem('count-by')),
      filter(ls => ls !== null),
      map(count => +count),
      map(count => new counterActions.CountBySet(count))
    )

  constructor(private actions$: Actions) { }
}
