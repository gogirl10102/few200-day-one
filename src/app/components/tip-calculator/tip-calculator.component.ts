import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent {
  title = 'Your Tip Calculator List';

  amount: number;
  tipPercent: number;
  constructor() { }

  ngOnInit() { }

  updateAmount(amount: number) {
    console.log(amount);
    this.amount = amount;
  }

  setTipPercent(percent: number) {
    this.tipPercent = percent;
  }
}
