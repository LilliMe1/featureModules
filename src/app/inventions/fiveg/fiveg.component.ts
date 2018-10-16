import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiveg',
  templateUrl: './fiveg.component.html',
  styleUrls: ['./fiveg.component.css']
})
export class FivegComponent implements OnInit {

  price:number =0;
  dataArray =[
    {
      pid: 90,
      pname: 'Product One',
      price: '10,000 K'
    },
    {
      pid: 91,
      pname: 'Product One1',
      price: '20,000 K'
    },
    {
      pid: 92,
      pname: 'Product One2',
      price: '30,000 K'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  catchDataComingFromParent(data){
    console.log("Logging from Parent:: 5G",data)

    let x = data.split(" ");
    console.log(x);
    let y = x[0].split(",")
    console.log(y)
    let z =y[0].concat(y[1]);
    console.log(z);
    this.price = this.price + parseInt(z);
  }
  removeFromCart(data){
    console.log("Logging from Parent:: 5G",data)

    let x = data.split(" ");
    console.log(x);
    let y = x[0].split(",")
    console.log(y)
    let z =y[0].concat(y[1]);
    console.log(z);
    this.price = this.price - parseInt(z);
  }


}
