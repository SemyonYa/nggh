import { Component } from '@angular/core';
import {DataService} from "./services/data.service";
import {AuthService} from "./services/auth.service";
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './app.common.css']
})
export class AppComponent {
    constructor() {}

    qwerty() {
        console.log((new Date()).toISOString());
    }
}