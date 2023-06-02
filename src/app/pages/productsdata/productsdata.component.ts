import { Component, OnInit } from '@angular/core';
import { ProductbackendService } from 'src/app/services/productbackend.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css']
})
export class ProductsdataComponent implements OnInit {
  constructor (public productbackendService: ProductbackendService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productbackendService.getAllProducts().subscribe(
      (products: any) => {
        this.productbackendService.product = products;
        console.log(this.productbackendService.product);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct(form: NgForm) {
    if (form.value._id) {
      this.productbackendService.updateProduct(form.value).subscribe(
        (res) => {
          this.getAllProducts();
          form.reset();
        },
        (err) => console.log(err)
      );
    } else {
      this.productbackendService.createProduct(form.value).subscribe(
        (res) => {
          this.getAllProducts();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteProduct(id: string) {
    if (confirm('¿Seguro de eliminar?')) {
      this.productbackendService.deleteProduct(id).subscribe(
        (res) => {
          this.getAllProducts();
        },
        (err) => console.log(err)
      );
    }
  }

  editProduct(product: Product) {
    this.productbackendService.selectedProduct = product;
  }

  resetForm(form: NgForm) {
    form.reset();
  }

}
