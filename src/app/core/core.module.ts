import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    declarations: [MainNavComponent, PageNotFoundComponent],
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule, MaterialModule, RouterModule],
    exports: [MainNavComponent, PageNotFoundComponent],
})
export class CoreModule {}
