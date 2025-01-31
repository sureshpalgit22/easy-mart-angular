import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/entity/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: UserLogin=new UserLogin();
  errorMessage: string;
  isError:boolean;
  constructor(private service:ProductService,private router: Router) { }

  ngOnInit() {

  }

  checkLogin(userLogin) {
    console.log(userLogin);
    this.login=userLogin;
    this.service.checkLogin(userLogin.emailOrMobileNumber, userLogin.password).subscribe(
      (data: any) => {
        this.checkLoginResult(data);
      },
      (error) => {
        this.isError=true;
      //  debugger
        this.errorMessage = "please enter the valid user id and passward";
      }
    )
  }
  checkLoginResult(data) {
    if (data) {
      this.router.navigate(['/seller-dashboard'],{
        queryParams: { name: data.username }
      });
    } 
    // else if (data === 'INVALID_EMAIL_OR_MOBILE_NUMBER') {
    //   this.isError = true;
    //   this.errorMessage = 'Invalid email or mobile number';
    //   setTimeout(() => {
    //     this.isError = false;
    //     this.errorMessage = '';
    //   }, 5000); 
    // } else if (data === 'INVALID_PASSWORD') {
    //   this.isError = true;
    //   this.errorMessage = 'Invalid password';
    //   setTimeout(() => {
    //     this.isError = false;
    //     this.errorMessage = '';
    //   }, 5000); 
    // }
  }
}
