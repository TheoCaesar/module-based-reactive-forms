import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      ),
      'hobbies': new FormArray([])
    })
  }

  get controls(){
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby(){
    const newCntrl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(newCntrl);
  }

  onSubmit() {
    console.log(this.signUpForm)
  }
  
}
