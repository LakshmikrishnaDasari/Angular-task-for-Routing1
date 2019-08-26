import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor() { }
 

  ngOnInit() {
    this.generateOTP();
  }
   generateOTP()
  {
  
      var digits = '0123456789';
  
      var otpLength = 4;
  
      var otp = '';
  
      for(let i=1; i<=otpLength; i++)
  
      {
  
          var index = Math.floor(Math.random()*(digits.length));
  
          otp = otp + digits[index];
  
      }
      
  console.log(otp);
      return otp;
  
  }
}
