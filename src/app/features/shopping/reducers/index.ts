export const FEATURE_NAME = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingListItem } from '../models';

export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// 1.


// 2.


// 3. The selector for the actual components

// need a component that return a list of shopping items
export const selectShoppingListItems =
  createSelector(selectAllShoppingItems, items => items as ShoppingListItem[]);
