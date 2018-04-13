import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Info } from './info'

export class InfoService{
 
    private data: Info[] = [
        { category:"Продукты", subcategory: "магазин", person: "Муж", cash: -200, date: new Date("April 4, 2018 10:13:00"), comment: "купил икру" },
        { category:"Зп", subcategory: "", person: "Муж", cash: 200, date: new Date("April 4, 2018 10:13:00"), comment: "" },
        { category:"Продукты", subcategory: "корм", person: "Жена", cash: -200, date: new Date("April 4, 2018 10:13:00"), comment: "вискас" },
    ];
    getInfo(): Observable<Info[]> {
        return of(this.data);
      }
    addInfo( category: string,  subcategory: string,  person: string,  cash: number,  date: Date,  comment: string){
        this.data.push(new Info(category, subcategory, person, cash, date, comment));
    }
    sortByDate(date: Date[]) : Info[] {
        var temp: Info[] = [];

        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].date.valueOf() > date[0].valueOf() && this.data[i].date.valueOf() < date[1].valueOf())
                temp.push(this.data[i]);
        }
        return temp;
    }

}