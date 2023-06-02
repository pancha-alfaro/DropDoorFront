import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})

export class ProductbackendService {

  constructor(private http: HttpClient) {
    this.product = [];
  }

  selectedProduct: Product = {
    name: '',
    price: 0,
    restaurant: '',
    _id: ''
  }
  
  URL_API =  'http://localhost:4000/api/products'

  product: Product[];
  

  getAllProducts() {
    return this.http.get(this.URL_API);
  }

  createProduct(product: Product){
    return this.http.post(this.URL_API, product)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.URL_API}/${id}`)
  }

  updateProduct(product: Product){
    return this.http.put(`${this.URL_API}/${product._id}`, product);
  }

}
