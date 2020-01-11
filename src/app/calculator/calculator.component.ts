import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  first: string;
  second: string;
  ops: string;
  ans: string;
  calcDisabled: boolean;
  ansCalculated: boolean;

  constructor() {
    this.first = '5';
    this.second = '2';
    this.ops = '-';
    this.ans = parseInt(this.first) - parseInt(this.second) + '';
    this.calcDisabled = false;
    this.ansCalculated = true;
  }

  ngOnInit() {
  }

  onFirstChange(event) {
    this.ansCalculated = false;
    this.first = event;

    if (isNaN(parseInt(this.first))) {
      this.calcDisabled = true;
    } else {
      this.calcDisabled = false;
    }
  }

  onSecondChange(event) {
    this.ansCalculated = false;
    this.second = event;

    if (isNaN(parseInt(this.second))) {
      this.calcDisabled = true;
    } else {
      this.calcDisabled = false;
    }
  }

  onCalculate(): void {
    const first = parseInt(this.first);
    const second = parseInt(this.second);
    const ops = this.ops;
    let ans: number;
    this.ansCalculated = true;

    if (ops === '+') {
      ans = first + second;
    } else if (ops === '-') {
      ans = first - second;
    } else if (ops === '*') {
      ans = first * second;
    }

    this.ans = ans + '';
  }

}
