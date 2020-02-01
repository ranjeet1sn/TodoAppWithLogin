import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo[]=[]
  selectedTodo: Todo
  readonly baseUrl = "http://localhost:3000/todo";
  constructor(private http: HttpClient) {
  }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  addTodo(tod: Todo) {
    console.log(tod)
    return this.http.post(this.baseUrl, tod, this.httpOptions)
  }
  getTodo() {
    return this.http.get(this.baseUrl,this.httpOptions)
  }
  deleteTodo(_id:string){
    return this.http.delete(this.baseUrl+`/${_id}`)
  }
  editTodo(_id:string,tod:Todo){
    console.log(_id)
    return this.http.put(this.baseUrl+ `/${_id}`,tod)
  }
}
