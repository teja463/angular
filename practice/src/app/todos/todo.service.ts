import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodos(){
    return this.httpClient.get('http://localhost:8080/todos');
  }

  deleteTodo(id: number){
    return this.httpClient.delete(`http://localhost:8080/todos/${id}`)
  }

  addTodo(text: string){
    return this.httpClient.post('http://localhost:8080/todos', {text, complete: false});
  }

  updateTodo(todo: any){
    return this.httpClient.put('http://localhost:8080/todos', todo);
  }

}
