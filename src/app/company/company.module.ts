import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPANY_ROUTES } from './company-routes';
import { CompanyComponent } from './company/company.component';



@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(COMPANY_ROUTES)
  ]
})
export class CompanyModule { }
