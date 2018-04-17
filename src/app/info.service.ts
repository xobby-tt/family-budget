import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';

import { Info } from './info'

@Injectable()
export class InfoService {

    private data: Info[] = [
        { category: "Продукты", subcategory: "магазин", person: "Муж", cash: -200, date: new Date("April 4, 2018 10:13:00"), comment: "купил икру" },
        { category: "Зп", subcategory: "", person: "Муж", cash: 200, date: new Date("April 4, 2018 10:13:00"), comment: "" },
        { category: "Продукты", subcategory: "корм", person: "Жена", cash: -200, date: new Date("April 4, 2018 10:13:00"), comment: "вискас" },
    ];

    constructor(private http: HttpClient) { }
    
    getInfo(): Observable<Info[]> {
        return of(this.data);
        //return this.http.get<Info[]>("api/info");
    }

    addInfo(category: string, subcategory: string, person: string, cash: number, date: Date, comment: string) {
        this.data.push(new Info(category, subcategory, person, cash, date, comment));
    }

    sortByDate(date: Date[]): Info[] {
        var temp: Info[] = [];

        for (var item of this.data) {
            if (item.date.valueOf() > date[0].valueOf() && item.date.valueOf() < date[1].valueOf())
                temp.push(item);
        }

        return temp;
    }

}