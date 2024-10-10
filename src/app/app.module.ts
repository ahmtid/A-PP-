import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AccountsComponent } from './accounts/accounts.component'
import { TransactionsComponent } from './transactions/transactions.component'
import { BudgetComponent } from './budget/budget.component'
import { InvestmentsComponent } from './investments/investments.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    TransactionsComponent,
    BudgetComponent,
    InvestmentsComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}