import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { DataService } from 'src/app/services/data.service';
import { UrlConstant } from 'src/app/services/url-constant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
  products:Product[];
  



  constructor(private dataService:DataService,  private urlConstant: UrlConstant) { }

  ngOnInit() {
  //  this.getAllUsers();
  this.getAllProduct();
 
  }

  getAllUsers(){
    const url = `${this.urlConstant.SERVER_PORT}user`;
    this.dataService.getAllObjects(url).subscribe(
      (data: any[]) => {
        console.log("data"+JSON.stringify(data));
        this.users = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }
  getAllProduct(){
    const url = `${this.urlConstant.SERVER_PORT}product/getAllProducts`;
    this.dataService.getAllObjects(url).subscribe(
      (data: any[]) => {
        console.log("data"+JSON.stringify(data));
        this.products = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }
}
