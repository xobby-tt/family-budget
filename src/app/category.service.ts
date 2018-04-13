import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Category } from './category'

export class CategoryService{
 
    private data: Category[] = [
        { category:"Продукты", subcategory: ["магазин", "ресторан", "корм"] }, 
        { category:"Зп", subcategory: [] }

    ];
    getCategory(): Observable<Category[]> {
        return of(this.data);
      }
    addCategory( category: string,  subcategory: Array<string>){
        this.data.push(new Category(category, subcategory));
    }
}