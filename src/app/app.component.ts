import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['God', 'Satan']

 ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
         username: new FormControl(
        '',
        [Validators.required, this.forbiddenNamesChecker.bind(this)]
        ),
        'email': new FormControl(
          null, 
          [Validators.required, Validators.email, ] 
        )   
      }),
      'gender': new FormControl(
        'male',
        Validators.required
      ),
      'hobbies': new FormArray([])
    })
    this.signUpForm.valueChanges.subscribe(
      (data)=>console.log(data))
  }
  
  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    
  //   const promiseData = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({'emailIsForbidden': true});
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promiseData;
  // }

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

  forbiddenNamesChecker(control: FormControl): {[s:string] : boolean} | null{
    return (this.forbiddenUsernames.indexOf(control.value) != -1) 
      ? {"usernameIsForbidden" : true} : null;
  }
  
}
