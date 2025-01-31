import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../entity/product';
import { DataService } from './data.service';
import { UrlConstant } from './url-constant.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private url : any;
    // user: User = new User();
   
 
 // const url = `${this.urlConstant.SERVER_PORT}`;
  constructor(private dataService: DataService,private urlConstant: UrlConstant) {

    this.url = `${this.urlConstant.SERVER_PORT}`;

   }

 
  saveOrUpdateProduct(product:Product){
    console.log("reached here saveOrUpdateProduct");
    const url = `${this.urlConstant.SERVER_PORT}`;
    return this.dataService.addObject(url+ 'product', JSON.stringify(product));
  }
  checkLogin(emailOrMobileNumber,password){
    const params: URLSearchParams = new URLSearchParams();
    params.set('userEmailOrMobileNumber', emailOrMobileNumber);
    params.set('password', password);
    return this.dataService.getObjects(this.url + 'user/check-login?'+params);
}
  signUp(user){
    const params: URLSearchParams = new URLSearchParams();
    return this.dataService.addObject(this.url+'user/signup',JSON.stringify(user));

  }
}