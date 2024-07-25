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
  // private url : any;
  // const url = `${this.urlConstant.SERVER_PORT}user`;
 

  constructor(private dataService: DataService,private urlConstant: UrlConstant) {
    
   }

 
  saveOrUpdateProduct(product:Product){
    const url = `${this.urlConstant.SERVER_PORT}`;
    return this.dataService.addObject(url+ 'product', JSON.stringify(product));
  }
  checkLogin(emailOrMobileNumber,password){
    const url = `${this.urlConstant.SERVER_PORT}`;
    const params: URLSearchParams = new URLSearchParams();
    params.set('userEmailOrMobileNumber', emailOrMobileNumber);
    params.set('password', password);
    return this.dataService.getObjects(url + 'user/check-login?'+params);
}
}