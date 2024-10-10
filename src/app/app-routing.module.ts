import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { DashboardComponent } from './dashboard/dashboard.component'
import { AccountsComponent } from './accounts/accounts.component'
import { TransactionsComponent } from './transactions/transactions.component'
import { BudgetComponent } from './budget/budget.component'
import { InvestmentsComponent } from './investments/investments.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'investments', component: InvestmentsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}