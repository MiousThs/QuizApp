import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
    public isLoading$: Observable<boolean>;

    constructor(private router: Router, private spinnerService: SpinnerService) {}

    public ngOnInit(): void {
        this.isLoading$ = this.spinnerService.isLoading$;
        this.router.events
            .pipe(
                filter(
                    (event: RouterEvent) =>
                        event instanceof NavigationStart ||
                        event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof NavigationError
                )
            )
            .subscribe((event: RouterEvent) => {
                if (event instanceof NavigationStart) {
                    this.spinnerService.show();
                    return;
                }
                this.spinnerService.hide();
            });
    }
}
