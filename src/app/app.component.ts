import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      username: new FormControl(''),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    })
  }

  onSubmit() {
    console.log(this.signUpForm)
  }
  
}
