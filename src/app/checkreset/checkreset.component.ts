import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-checkreset',
  templateUrl: './checkreset.component.html',
  styleUrls: ['./checkreset.component.scss']
})
export class CheckresetComponent {
  form: FormGroup;
  checked:boolean;
  controls:any;
   orders = [
     { id: 1, name: 'java' },
     { id: 2, name: 'automation' },
     { id: 3, name: 'angular' },
     { id: 4, name: 'springboot' }
   ];
 
   constructor(private formBuilder: FormBuilder) {
    function  reset(){
     this.form.reset( );
     
   }
     this.controls = this.orders.map(c => new FormControl(false));
     this.controls[0].setValue(true);
    
 
     this.form = this.formBuilder.group({
       orders: new FormArray(this.controls)
     });
   }
 
   submit() {
     const selectedOrderIds = this.form.value.orders
       .map((v, i) => v ? this.orders[i].name : null)
       .filter(v => v !== null);
 
     console.log(selectedOrderIds);
   }
   reset(){
     this.form.reset( );
     this.checked=true;
     if(this.checked)
     {
       this.controls[0].setValue(true);
     }
   }
 }
 
 