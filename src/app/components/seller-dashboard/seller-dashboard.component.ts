import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from 'src/app/entity/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  products: Product[] = []; // This should be populated from a service
  isSidebarHidden = false;
  navOption: string = '';
  selectedFile: File | null = null;
  editMode: boolean = false;
  sellerName: string = 'Rahul Chhatait'; // Example value, replace with actual data
  sellerInitial: string = 'R'; // Example value, replace with actual data
  product: Product = new Product();
  
  constructor(private productService:ProductService) {}

  ngOnInit() {
    // Load products, seller details, etc. from service
  }



  onReset(form: NgForm): void {
    form.resetForm();
    this.selectedFile = null;
    this.product = new Product(); // Reset product
    this.editMode = false;
  }


  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
  
        // Validate and ensure the image is in correct dimensions if needed
        const img = new Image();
        img.onload = () => {
          if (img.width !== 500 || img.height !== 500) {
            alert('Image size must be 500x500 pixels.');
            this.selectedFile = null;
            fileInput.value = '';
          } else {
            this.product.image = base64String; // Assign Base64 string to the product object
          }
        };
        img.src = base64String;
      };
      reader.readAsDataURL(fileInput.files[0]); // Read file as Data URL
    }
  }

 

  onSubmit(): void {
    this.product.sellerId = '669bd68fd711db4c6c920879'; // Hardcoding sellerId for now
    this.productService.saveOrUpdateProduct(this.product).subscribe(
      (data) => {
        console.log('Product saved:', data);
        alert('Product added successfully!');
      },
      (error) => {
        console.error('Error saving product:', error);
        alert('Error saving product.');
      }
    );
  }
  toggleSidebar(): void {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  setNavOption(navOption: string): void {
    this.navOption = navOption;
  }

  onEdit(product: Product): void {
    this.product = { ...product }; // Pre-fill the form for editing
    this.editMode = true;
    this.navOption = 'addProduct';
  }

  onDelete(product: Product): void {
    // Implement delete logic
  }

  logout(): void {
    // Implement logout logic
  }
}
