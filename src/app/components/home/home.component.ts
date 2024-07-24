import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UrlConstant } from 'src/app/services/url-constant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
  products = [
    {
      name: 'Product 1',
      brandName:'ADDIDAS',
      description: 'Half t-shirt for men',
      image: 'assets/images/ai-generated-8557635_1280.jpg',
      price:57
    },
    {
      name: 'Product 2',
      description: 'Cartoon Wallpaper for Home wall',
      image: 'assets/images/ai-generated-8862797_1280.png',
      brandName:'PUMA',
      price:99
    },
    {
      name: 'Product 3',
      description: 'SUV Car',
      image: 'assets/images/pexels-mikebirdy-170811.jpg',
      brandName:'TATA MOTORS',
      price:10000
    },
    {
      name: 'Product 4',
      description: 'Soprt half t-shirt',
      image: 'assets/images/tshirt-8726721_1280.jpg',
      brandName:'ADDIDAS',
      price:68
    },
    {
      name: 'Product 1',
      brandName:'ADDIDAS',
      description: 'Half t-shirt for men',
      image: 'assets/images/ai-generated-8557635_1280.jpg',
      price:57
    },
    {
      name: 'Product 2',
      description: 'Cartoon Wallpaper for Home wall',
      image: 'assets/images/ai-generated-8862797_1280.png',
      brandName:'PUMA',
      price:99
    },
    {
      name: 'Product 3',
      description: 'SUV Car',
      image: 'assets/images/pexels-mikebirdy-170811.jpg',
      brandName:'TATA MOTORS',
      price:10000
    },
    {
      name: 'Product 4',
      description: 'Soprt half t-shirt',
      image: 'assets/images/tshirt-8726721_1280.jpg',
      brandName:'ADDIDAS',
      price:68
    },
    {
      name: 'Product 1',
      brandName:'ADDIDAS',
      description: 'Half t-shirt for men',
      image: 'assets/images/ai-generated-8557635_1280.jpg',
      price:57
    },
    {
      name: 'Product 2',
      description: 'Cartoon Wallpaper for Home wall',
      image: 'assets/images/ai-generated-8862797_1280.png',
      brandName:'PUMA',
      price:99
    },
    {
      name: 'Product 3',
      description: 'SUV Car',
      image: 'assets/images/pexels-mikebirdy-170811.jpg',
      brandName:'TATA MOTORS',
      price:10000
    },
    {
      name: 'Product 4',
      description: 'Soprt half t-shirt',
      image: 'assets/images/tshirt-8726721_1280.jpg',
      brandName:'ADDIDAS',
      price:68
    },
    {
      name: 'Product 1',
      brandName:'ADDIDAS',
      description: 'Half t-shirt for men',
      image: 'assets/images/ai-generated-8557635_1280.jpg',
      price:57
    },
    {
      name: 'Product 2',
      description: 'Cartoon Wallpaper for Home wall',
      image: 'assets/images/ai-generated-8862797_1280.png',
      brandName:'PUMA',
      price:99
    },
    {
      name: 'Product 3',
      description: 'SUV Car',
      image: 'assets/images/pexels-mikebirdy-170811.jpg',
      brandName:'TATA MOTORS',
      price:10000
    },
    {
      name: 'Product 4',
      description: 'Soprt half t-shirt',
      image: 'assets/images/tshirt-8726721_1280.jpg',
      brandName:'ADDIDAS',
      price:68
    },
    // Add more products here
  ];
  categories = [
    {
      name: 'Mobile',
      description: 'Description for Product 1',
      image: 'assets/images/perfume-6518634_1280.jpg'
    },
    {
      name: 'Home Appliances',
      description: 'Description for Product 2',
      image: 'assets/images/ai-generated-8679407_1280.png'
    },
    {
      name: 'Perfumes',
      description: 'Description for Product 1',
      image: 'assets/images/perfume-6518634_1280.jpg'
    },
    {
      name: 'Elsectronic',
      description: 'Description for Product 2',
      image: 'assets/images/ai-generated-8679407_1280.png'
    },
    {
      name: 'Car',
      description: 'Description for Product 1',
      image: 'assets/images/pexels-mikebirdy-170811.jpg'
    },
    {
      name: 'Cloths',
      description: 'Description for Product 2',
      image: 'assets/images/pexels-efrem-efre-2786187-13439836.jpg'
    },
    // Add more products here
  ];



  constructor(private dataService:DataService,  private urlConstant: UrlConstant) { }

  ngOnInit() {
  //  this.getAllUsers();
 
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
}
