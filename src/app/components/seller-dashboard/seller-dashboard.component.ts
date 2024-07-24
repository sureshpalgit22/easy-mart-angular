import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/entity/product';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  // productForm: FormGroup;
  // products: Product[] = [];
  // editMode = false;
  // editProductId: number | null = null;

  constructor() {
    // this.productForm = this.fb.group({
    //   name: ['', Validators.required],
    //   price: ['', [Validators.required, Validators.min(0)]],
    //   description: ['', Validators.required]
   // });
  }

  ngOnInit() {}

  // onSubmit(): void {
  //   const formValue = this.productForm.value;
    
  //   if (this.editMode) {
  //     const index = this.products.findIndex(p => p.id === this.editProductId);
  //     if (index !== -1) {
  //       this.products[index] = { id: this.editProductId!, ...formValue };
  //     }
  //   } else {
  //     const newProduct: Product = {
  //       id: this.products.length + 1,
  //       ...formValue
  //     };
  //     this.products.push(newProduct);
  //   }

  //   this.productForm.reset();
  //   this.editMode = false;
  //   this.editProductId = null;
  // }

  // onEdit(product: Product): void {
  //   this.productForm.patchValue(product);
  //   this.editMode = true;
  //   this.editProductId = product.id;
  // }

  // onDelete(product: Product): void {
  //   this.products = this.products.filter(p => p.id !== product.id);
  // }

}
