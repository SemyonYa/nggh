import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Company} from "../company/company.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {

    }

    private host = 'http://injini.local:100/';
    private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia 9"];

    getData(): string[] {

        return this.data;
    }

    getCompanies() {
        return this.http.get(this.host + 'company/get');
    }

    getCompany(id: number) {
        return this.http.get(this.host + 'company/get?id=' + id.toString());
    }

    putCompany(newCompany: Company) {
        return this.http.post(this.host + 'company/put', newCompany);
    }

    postCompany(newCompany: Company) {
        return this.http.post(this.host + 'company/post', newCompany);
    }

}