import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { BottomNavComponent } from './layout/bottom-nav/bottom-nav.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { LayoutModule } from './layout/layout.module';

const declarations: any[] = [];
const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  LayoutModule
];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  imports: [...imports],
})
export class SharedModule {}
