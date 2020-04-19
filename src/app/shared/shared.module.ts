import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material.module';

const modules = [RouterModule];
@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [CommonModule, MaterialModule, ...modules],
    exports: [PageNotFoundComponent, ...modules],
})
export class SharedModule {}
