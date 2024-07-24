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
  sellerName: string = 'Suresh Chandra Pal'; // Example value, replace with actual data
  sellerInitial: string = 'S'; // Example value, replace with actual data
  product: Product = new Product();
  
  constructor(private productService:ProductService) {}

  ngOnInit() {
    // Load products, seller details, etc. from service
  }

  onSubmit(): void {
    if (this.editMode) {
      // Update product logic
    } else {
      // Add product logic
      
     this.product.sellerId='669bbab4a06f18826162549a';
      this.productService.saveOrUpdateProduct(this.product).subscribe(
        data => {
          console.log("data= "+JSON.stringify(data));
          
        },
        error => {
          //this.appComponent.setErrorMessage(error);
        }
      );
    }
    // Reset form after submission
  //  this.onReset();
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
      this.selectedFile = fileInput.files[0];
      const img = new Image();
      img.onload = () => {
        if (img.width !== 500 || img.height !== 500) {
          alert('Image size must be 500x500 pixels.');
          this.selectedFile = null;
          // Reset file input
          fileInput.value = '';
        }
      };
      img.src = URL.createObjectURL(this.selectedFile);
    }
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
