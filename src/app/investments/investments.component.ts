import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {
  investments = [
    { name: 'Stock Portfolio', value: 25000, change: 5.2 },
    { name: '401(k)', value: 75000, change: 3.8 },
    { name: 'Real Estate Fund', value: 50000, change: -1.5 }
  ];

  constructor() { }

  ngOnInit() {
  }
}