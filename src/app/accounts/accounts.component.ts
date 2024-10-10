import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts = [
    { name: 'Checking', balance: 5000 },
    { name: 'Savings', balance: 10000 },
    { name: 'Credit Card', balance: -1500 }
  ];

  constructor() { }

  ngOnInit() {
  }
}