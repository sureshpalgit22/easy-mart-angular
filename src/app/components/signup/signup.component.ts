// signup.component.ts
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/entity/user';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  user: User = new User();
  confirmPassword: string = '';

  constructor(private dataService: DataService, private router: Router,private productService:ProductService,private appComponent:AppComponent) {}
  ngOnInit() {
   
  }

  onSubmit() {
    
    if (this.user.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }


   // const url = 'http://localhost:8080/user/signup';
    // this.dataService.addObject(url, this.user).subscribe(response => {
    //   console.log('User created successfully!', response);
    //   this.router.navigate(['/login']);
    // }, error => {
    //   console.error('Error creating user!', error);
    // });

    this.productService.signUp(this.user).subscribe((res)=>{

      this.appComponent.setSuccessMessage(res);
    });error =>{

      this.appComponent.setErrorMessage(error);
    }
  }
}
