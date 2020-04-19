import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'process', loadChildren: () => import('./quiz-process/quiz-process.module').then(m => m.QuizProcessModule) },
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
