import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'We Tippin!';
  subTitle= 'Meal Tip Calculator';
  taxPercentage = 0;
  tipPercentage = 0;
  totalPrice = 0; 
  thankYou=""
  print="";
  bar="";

  


  calculate(price,tax,tip){
    

    this.taxPercentage = (tax /100) * price;

    this.tipPercentage = (tip /100) * price;

    this.totalPrice = Number.parseFloat(this.taxPercentage.toString()) + Number.parseFloat(this.tipPercentage.toString()) + Number.parseFloat(price.toString());
    
    return this.totalPrice;
  
  }

  message(){
    this.thankYou = "Thank you for calculating with us.";
    this.print = "Come again!"
    this.bar="Almost before we knew it, we had"

    console.log(this.thankYou);
    console.log(this.print);
    console.log(this.bar);

  
  }
  
}











