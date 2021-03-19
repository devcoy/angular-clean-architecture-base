import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../auth.css']
})
export class RegisterComponent implements OnInit {
    pageTitle: string = 'Registro';

    constructor() {}

    ngOnInit(): void {}
}
