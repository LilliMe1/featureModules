import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productsx',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input()
  productDetails;

  @Output()
  throwData = new EventEmitter();

  @Output()
  removeEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  addToC(price){
    
    console.log(price);
    this.throwData.emit(price);
  }
  removeFromC(price){

    this.removeEvent.emit(price);
  }

}
