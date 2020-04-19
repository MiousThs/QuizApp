import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'dashboard', redirectTo: 'process' },
    { path: 'process', loadChildren: () => import('./quiz-process/quiz-process.module').then(m => m.QuizProcessModule) },
    { path: '', redirectTo: 'process', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
