import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from '../shared/material.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [MainNavComponent],
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule, MaterialModule, SpinnerModule, SharedModule],
    exports: [MainNavComponent],
})
export class CoreModule {}
