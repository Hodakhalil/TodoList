import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  taskArray:any = [{ taskName: 'do Exercies', isCompleted: false }
  ]



  taskForm: FormGroup = new FormGroup({
    taskName: new FormControl('', [Validators.required]),

  })



  handleForm(): void{
    this.taskArray.push(
      {
        taskName: this.taskForm.controls['taskName'].value,
        isCompleted: false,
         
      } 
       
    )

    this.taskForm.reset();

  }



  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1)
  
    
  }


  onclick(index:number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;

    
    
    
  }
}
