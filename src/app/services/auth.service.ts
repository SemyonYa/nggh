import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginForm} from "../login/login.model";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) {
    }

    private host = 'http://injini.local:100/';

    // isAdmin(login: string): Observable<object> {
    //     return this.http.get(this.host + 'auth/is-admin?login=' + login);
    // }

    login(loginForm: LoginForm): Observable<object> {
        return this.http.post(this.host + 'auth/login', loginForm);
    }

    isAuthed() {

    }

    isAdmin() {
        const token1 = localStorage.getItem('token1');
        const helper = new JwtHelperService();
        const decoded = helper.decodeToken(token1);
        if (new Date(decoded['exp'] * 1000) > new Date()) {
            if (decoded['role'] == 'admin') {
                return true;
            } else {
                return false;
            }
        } else {
            localStorage.removeItem('token1');
            // Update Tokens function
            const token2 = localStorage.getItem('token2');
            console.log(token2)
            const decoded2 = helper.decodeToken(token2);
            if (new Date(decoded2['exp'] * 1000) > new Date()) {
                this.http.post(this.host + 'auth/update-tokens', {'token2': token2}).subscribe(tokens => {
                    console.log('POST');
                    console.log(tokens);
                    if (tokens) {
                        localStorage.setItem('token1', tokens['jwt1'].toString());
                        localStorage.setItem('token2', tokens['jwt2'].toString());
                        return true;
                    } else {
                        localStorage.removeItem('token2');
                        this.router.navigate(['/login'])
                    }
                });
            }
        }
        // if (decoded['role'] == 'admin' && new Date(decoded['exp'] * 1000) > new Date()) {
        //     return true;
        // }
    }

}