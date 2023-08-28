import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent {
  registrationForm:FormGroup
  constructor(private fb:FormBuilder) { 

   this.registrationForm=this.fb.group({
      username:[''],
      password:[''],
      confirmpassword:[''],
      address:this.fb.group({
        city:[''],
        state:['']
      }),
      mostpreferredbrand:this.fb.array([
        this.fb.control(null)
      
      ])
    });
  }

  ngOnInit(): void {
  }

   /* registrationForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl(),
      confirmpassword:new FormControl(),
      address:new FormGroup({
        city:new FormControl(),
        state:new FormControl()
      })
     
    })*/
    
    
    getmostpreferredbrandFormControls():AbstractControl[]
    {
      return( <FormArray>this.registrationForm.get('mostpreferredbrand')).controls
    }

    //Adding new control
    addBrand():void
    {
      (this.registrationForm.get('mostpreferredbrand') as FormArray).push(
        this.fb.control(null)
      )
    }

    //remove
    removeBrand(index:any)
    {
        return( this.registrationForm.get('mostpreferredbrand') as FormArray).removeAt(index);
    }


}
