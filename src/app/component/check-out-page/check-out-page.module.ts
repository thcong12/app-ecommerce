import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { SharedModule } from 'src/app/shared/shared.module';
import { CheckOutPageRoutingModule } from './check-out-page-routing.module';

const declarations: any[] = [];
const imports = [CommonModule, SharedModule,CheckOutPageRoutingModule];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  imports: [...imports],
})
export class CheckOutPageModule {}
