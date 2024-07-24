// signup.component.ts
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
 user:User;
  confirmPassword: string = '';

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(){
   
  }

  onSubmit() {
    if (this.user.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const url = 'http://localhost:8080/user';
    this.dataService.addObject(url, this.user).subscribe(response => {
      console.log('User created successfully!', response);
      this.router.navigate(['/login']);
    }, error => {
      console.error('Error creating user!', error);
    });
  }
}
