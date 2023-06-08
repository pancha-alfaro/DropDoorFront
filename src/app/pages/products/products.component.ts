import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 
  @Input()  products: any[] = [
    { name: 'McDonalds', image: 'McDonalds.jpg' },
    { name: 'KFC', image: 'KFC.jpg' },
    { name: 'Noa Sushi', image: 'NoaSushi.jpg' },
    { name: 'Dominos', image: 'Dominos.jpg' },
    { name: 'Sopitas y Frijolada', image: 'SopitasyFrijolada.jpg' },
    { name: 'Fruteria Pepita', image: 'FruteriaPepita.jpg' },
    // Agrega más productos aquí según tus necesidades
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
