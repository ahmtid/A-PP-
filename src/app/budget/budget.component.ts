import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budgetCategories = [
    { name: 'Housing', budgeted: 1000, spent: 950 },
    { name: 'Food', budgeted: 500, spent: 450 },
    { name: 'Transportation', budgeted: 200, spent: 180 },
    { name: 'Entertainment', budgeted: 150, spent: 200 }
  ];

  constructor() { }

  ngOnInit() {
  }
}