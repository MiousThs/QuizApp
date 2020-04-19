import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { QuizProcessRoutingModule } from './quiz-process.routing.module';

@NgModule({
    declarations: [TicketComponent],
    exports: [TicketComponent],
    imports: [CommonModule, QuizProcessRoutingModule],
})
export class QuizProcessModule {}
