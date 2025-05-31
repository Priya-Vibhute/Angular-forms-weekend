import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  imports: [FormsModule,CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  @ViewChild('form') signUpform!:NgForm;

  onSubmit()
  {
    console.log(this.signUpform);
    console.log(this.signUpform.value);
    this.signUpform.reset();
  }


  fillValues()
  {
    this.signUpform.setValue({
      email:"priyanka.vibhute@itvedant.com",
      password:"ABC@123"
    })
  }

}
