import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';
declare var M:any
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateY(100%)' }))
      ])
    ])]
})
export class TodoComponent implements OnInit {
  title: string
  description: string
  editMode: boolean = false

  _id: string;
  todo: Todo;
  @ViewChild('form', { static: false }) form: NgForm
  constructor(private sr: TodoService) { }
  ngOnInit() {
    this.getlist()
  }
  getlist() {
    this.sr.getTodo().subscribe((res) => {
      this.sr.todo = res as Todo[]
    })
  }
  onSubmit() {
    const todo = new Todo(
      this.form.value.title,
      this.form.value.description
    )
    if (!this.editMode) {

      this.sr.addTodo(todo)
        .subscribe(() => {
          this.getlist()
          this.form.reset()
          M.toast({html: 'Added Succesfully',classes:"rounded"})
        })
    }
    else {
      this.sr.editTodo(this._id, todo).subscribe((res) => {
        this.getlist()
        this.form.reset()
        M.toast({html: 'Updated Succesfully',classes:"rounded"})
      })
    }
  }
  onDelete(_id: string) {
    this.sr.deleteTodo(_id).subscribe(() => {
      this.getlist()
      this.form.reset()
      M.toast({html: 'Deleted Succesfully',classes:"rounded"})
    })
  }
  onEdit(_id: string, d: Todo) {
    const todo = new Todo(
      this.title = d.title,
      this.description = d.description
    )
    this._id = _id;
    this.editMode = true
  }
}

