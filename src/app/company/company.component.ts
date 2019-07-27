import {Component, OnInit} from "@angular/core";
import {DataService} from "../services/data.service";
import {Company} from "./company.model";
import {AuthService} from "../services/auth.service";
import {Time} from "@angular/common";
// import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
    selector: 'app-companies',
    templateUrl: 'company.component.html',
    styleUrls: ['company.component.css', '../app.common.css'],
    providers: [DataService]
})

export class CompanyComponent implements OnInit {
    option: number = 0;
    companies: Company[] = [];
    currentCompany: Company = new Company();

    constructor(private dataSvc: DataService) {
    }

    ngOnInit() {
        this.loadCompanies();
    }

    getCompanies() {
        this.dataSvc.getCompanies().subscribe(data => this.companies = <Company[]>data);
    }

    getCurrentCompany(id: number) {
        this.dataSvc.getCompany(id).subscribe(data => this.currentCompany = <Company>data);
    }

    loadCompanies() {
        this.getCompanies();
        this.option = 0;
    }

    loadCompany(id: number) {
        this.getCurrentCompany(id);
        this.option = 1;
    }

    loadEditForm(id: number) {
        this.getCurrentCompany(id);
        this.option = 2;
    }

    loadNewForm() {
        this.currentCompany = new Company();
        this.option = 3;
    }

    saveCompany() {
        this.dataSvc.putCompany(this.currentCompany).subscribe(
            () => this.loadCompanies(),
            error => console.log(error)
        );
    }

    addCompany() {
        this.dataSvc.postCompany(this.currentCompany).subscribe(
            () => this.loadCompanies(),
            error => console.log(error)
        )
    }

}