import { Component,OnInit,Inject} from '@angular/core';
import {  MatDialogRef,  MatDialogModule,  MAT_DIALOG_DATA,} from '@angular/material/dialog';
export interface ModalData {
  name: string;
  color: string;
}
@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){}
}
