import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {

  reactiveForm!:FormGroup;

  ngOnInit()
  {
    this.reactiveForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      age:new FormControl(0)
    })
  }

  onSubmit()
  {
    console.log(this.reactiveForm);
    //     console.log("Valid",this.reactiveForm.valid);
    //       console.log("Touched",this.reactiveForm.touched);
    //         console.log("Dirty",this.reactiveForm.dirty);
              console.log("Email",this.reactiveForm.get('email'));


    
  }
      
}
