import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
todos !: Array<Itodo>
  constructor(
    private _todoService : TodoService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchAllTodos()
      .subscribe(res => {
        console.log(res)
        this.todos = res.filter(todo => todo.completed)
        console.log(this.todos);
      })
  }

}
