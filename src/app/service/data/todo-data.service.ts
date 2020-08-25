import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retreiveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);

  }

  retreiveTodo(username, id) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);

  }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);

  }

  updateTodo(username, id, todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);

  }

  addTodo(username, todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos`, todo);

  }
}
