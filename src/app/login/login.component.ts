import {Component} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {LoginForm} from "./login.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css', '../app.common.css' ]
})

export class LoginComponent {
    public loginModel: LoginForm = new LoginForm();
    public error = false;
    constructor(private authSvc: AuthService, private router: Router) {}

    login() {
        this.authSvc.login(this.loginModel).subscribe(
            data => {
                if (data) {
                    localStorage.setItem('token1', data['jwt1'].toString());
                    localStorage.setItem('token2', data['jwt2'].toString());
                    // console.log(data);
                    this.router.navigate(['/'])
                } else {
                    this.error = true;
                }
            }
        );
    }
}