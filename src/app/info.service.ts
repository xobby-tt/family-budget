import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Info } from './info'

@Injectable()
export class InfoService {

    // private data: Info[] = [
    //     { category: "Продукты", subcategory: "магазин", person: "Муж", cash: -200, date: "April 4, 2018 10:13:00", comment: "купил икру" },
    //     { category: "Зп", subcategory: "", person: "Муж", cash: 200, date: "April 4, 2018 10:13:00", comment: "" },
    //     { category: "Продукты", subcategory: "корм", person: "Жена", cash: -200, date: "April 4, 2018 10:13:00", comment: "вискас" },
    // ];

    httpOptions: object = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getInfo(): Observable<Info[]> {
        //return of(this.data);
        return this.http.get<Info[]>("api/info");
    }

    addInfo(category: string, subcategory: string, person: string, cash: number, date: string, comment: string) {
        //this.data.push(new Info(category, subcategory, person, cash, date, comment));
        this.http.post<Info>("api/info/entity", new Info(category, subcategory, person, cash, date, comment), this.httpOptions);
    }

    sortByDate(items: Info[], date: Date[]): Info[] {
        var temp: Info[] = [];
        var dateItem: Date

        for (var item of items) {
            dateItem = new Date(item.date);
            if (dateItem.valueOf() > date[0].valueOf() && dateItem.valueOf() < date[1].valueOf())
                temp.push(item);
        }

        return temp;
    }

}