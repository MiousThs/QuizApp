import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerModule } from './spinner/spinner.module';

const modules = [
  SpinnerModule
];
@NgModule({
  declarations: [],
  imports: [ CommonModule, ...modules ],
  exports: [...modules]
})
export class SharedModule { }
