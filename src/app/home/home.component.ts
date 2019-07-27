import {Component, OnInit} from "@angular/core";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', '../app.common.css']
})

export class HomeComponent implements OnInit {
    // constructor () {}
    public jwt1 = '';
    public jwt2 = '';
    public decodedToken1: object = null;
    public decodedToken2: object = null;
    ngOnInit(): void {
        this.jwt1 = localStorage.getItem('token1');
        this.jwt2 = localStorage.getItem('token2');
        const helper = new JwtHelperService();
        this.decodedToken1 = helper.decodeToken(this.jwt1);
        this.decodedToken2 = helper.decodeToken(this.jwt2);
    }

    clearToken() {
        localStorage.removeItem('token');
    }
}