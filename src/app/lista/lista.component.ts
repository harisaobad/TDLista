import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];
  constructor() {

  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    form.reset();
  }
  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);

  }
  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
export interface taskArray {
  taskName: string;
  isComplete: boolean
}
