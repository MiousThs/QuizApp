import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';
import { MainNavComponent } from './main-nav/main-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
