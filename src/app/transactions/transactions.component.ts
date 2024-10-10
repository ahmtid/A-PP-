import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions = [
    { date: '2023-05-01', description: 'Grocery Store', amount: -75.50 },
    { date: '2023-05-02', description: 'Salary Deposit', amount: 3000 },
    { date: '2023-05-03', description: 'Electric Bill', amount: -120 }
  ];

  constructor() { }

  ngOnInit() {
  }
}