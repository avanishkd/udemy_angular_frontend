import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string

  // [new Todo(1, 'learn to dance', false, new Date()),
  // new Todo(2, 'become expert at angular', false, new Date()),
  // new Todo(3, 'learn to play guitar', false, new Date())
  // ]
  constructor(private todoService: TodoDataService,private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retreiveAllTodos('Avanish').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id) {
    // console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('Avanish', id).subscribe(
      response => {
        console.log(response);
        this.refreshTodos();
        this.message = `Delete of todo:${id} is successful!`;
        
      }
    )
  }

  updateTodo(id){
    this.router.navigate(['todos',id])
  }

  addTodo(id){
    this.router.navigate(['todos',-1])
  }

}
