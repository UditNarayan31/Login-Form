import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  checkoutForm:FormGroup;
   requirment;
   choose;
   department;
  constructor(private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      req: ['', Validators.required],
       choose: ['', Validators.required],
       dep: ['', Validators.required],
       pass: ['', Validators.required]
     });
  }

  ngOnInit(): void {
    AOS.init();
  }

  onSubmit(customerData) {
    this.requirment = customerData.req;
    this.choose = customerData.choose;
    this.department = customerData.dep;
    this.checkoutForm.reset();
  }

}
