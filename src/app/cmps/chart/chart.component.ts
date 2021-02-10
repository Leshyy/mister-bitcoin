import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() data: any[];
  // bitcoin rate | timestamp in seconds

  myType = 'ColumnChart';
  chartColumns = ['transactions', 'value(USD)'];

  constructor() { }

  ngOnInit(): void {
  }

}
