import {Component, OnInit} from "@angular/core";
import {DataService} from "../services/data.service";

@Component({
    selector: 'about-component',
    templateUrl: './about.component.html',
    styleUrls: [ './about.component.css', '../app.common.css' ],
    providers: [ DataService ]
})

export class AboutComponent implements OnInit {
    phones: string[] = [];
    constructor(private data: DataService) {

    }

    ngOnInit() {
        this.phones = this.data.getData();
    }

}