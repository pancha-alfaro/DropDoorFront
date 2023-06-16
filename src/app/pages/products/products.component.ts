import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 
  @Input()  products: any[] = [
    { name: 'McDonalds', image: 'McDonalds.jpg', url: "https://www.mcdonalds.com.co/" },
    { name: 'KFC', image: 'KFC.jpg', url: "https://www.kfc.co/menu" },
    { name: 'Noa Sushi', image: 'NoaSushi.jpg', url: "https://web.facebook.com/NoaSushiBaq/" },
    { name: 'Dominos', image: 'Dominos.jpg', url: "https://www.dominos.com.co/" },
    { name: 'Sopitas y Frijolada', image: 'SopitasyFrijolada.jpg', url: "https://web.facebook.com/RestauranteSopitas/" },
    { name: 'Fruteria Monkys', image: 'Monky.png', url: "https://www.fruteriamonkys.com/" },
  ];
  
  constructor() { }

   ngOnInit() {
  }

}
