import { Item } from './item'

export class DataService{
 
    private data: Item[] = [
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? oooooooooooooдддддддддддддддддддддддддoo" },
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? ooooooooooooooo" },
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? " },
        { category:"Apple iPhone 7", subcategory: "hello", person: "it", cash: 200, date: "me", comment: "can you hear me? ooooooooooooooo" },

    ];
    getData(): Item[] {
        return this.data;
    }
    addData( category: string,  subcategory: string,  person: string,  cash: number,  date: string,  comment: string){
        this.data.push(new Item(category, subcategory, person, cash, date, comment));
    }
}