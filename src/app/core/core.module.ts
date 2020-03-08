import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MainNavComponent
  ]
})
export class CoreModule { }
