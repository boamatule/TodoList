import { createSelector } from 'reselect';
import { createStore } from 'redux';

export const getTodos = state => state.todos;
export const getTodosLoading = state => state.isLoading;

export const getIncompleteTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => !todo.isCompleted),
);