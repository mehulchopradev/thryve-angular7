import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc-results',
  templateUrl: './calc-results.component.html',
  styleUrls: ['./calc-results.component.scss']
})
export class CalcResultsComponent implements OnInit {

  @Input() firstNo: string;
  @Input() secondNo: string;
  @Input() ans: string;
  @Input() ansCalculated: boolean;

  constructor() { }

  ngOnInit() {
  }

}
