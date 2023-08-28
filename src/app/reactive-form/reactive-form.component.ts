import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormArray } from "@angular/forms";
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  // City names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    file: [null],
    fullName: this.fb.group({
      firstName: [''],
      lastName: ['']
    }),
    email: [''],
    phoneNumber: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      cityName: ['']
    }),
    gender: ['male'],
    PasswordValidation: this.fb.group({
      password: [''],
      confirmPassword: ['']
    }),
    addDynamicElement: this.fb.array([])
  })  
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = '/assets/dummy-user.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
    //  this.cd.markForCheck();        
    }
  }
  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = '/assets/dummy-user.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: [null]
    });
  }
  // Choose city using select dropdown
  changeCity(e) {
    this.registrationForm.get('address.cityName').setValue(e.target.value, {
     onlySelf: true
    })
   }
}
