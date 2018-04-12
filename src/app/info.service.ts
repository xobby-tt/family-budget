import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Info } from './info'

export class InfoService{
 
    private data: Info[] = [
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? oooooooooooooдддддддддддддддддддддддддoo" },
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? ooooooooooooooo" },
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? " },
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? ooooooooooooooo" },

    ];
    getInfo(): Observable<Info[]> {
        return of(this.data);
      }
    addInfo( category: string,  subcategory: string,  person: string,  cash: number,  date: string,  comment: string){
        this.data.push(new Info(category, subcategory, person, cash, date, comment));
    }
}