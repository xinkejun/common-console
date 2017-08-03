import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertService } from '../core/alert.service';

@Component({
    //moduleId: module.id,
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
})

export class AlertComponent implements OnInit {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(value => { this.message = value; });
    }
}