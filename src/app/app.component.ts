import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
         username: new FormControl(
        '',
        // Validators.required,
        ),
        'email': new FormControl(
          null, 
          [Validators.required,Validators.email] 
        )   
      }),
      'gender': new FormControl(
        'male',
        Validators.required
      )
    })
  }

  onSubmit() {
    console.log(this.signUpForm)
  }
  
}
