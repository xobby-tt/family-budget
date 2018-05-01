import { Input, Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service'
import { CategoryService } from '../category.service'
import { Info } from '../info';
import { Category } from '../category';
import { CategoryCash } from '../categoryCash'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  @Input() date: Date[];

  @Input() items: Info[] = [];
  sortedByDate: Info[] = [];
  categories: Category[];
  categoryCash: CategoryCash[] = [];
  selected: string = "income";

  constructor(private infoService: InfoService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.sortByDate();
    this.getCategories();
    this.onSelect("income");
  }

  getCategories(): void {
    this.categoryService.getCategory().subscribe(categories => this.categories = categories)
  }

  sortByDate(): void {
    let sorted = this.infoService.sortByDate(this.items, this.date[0], this.date[1]);
    if (sorted)
      this.sortedByDate = sorted;
  }

  getResult(): number {
    let temp: object = {};
    let sum: number = 0;

    for (let item of this.sortedByDate)
      sum += item.cash;

    return sum;
  }

  onSelect(condition: string): void {
    this.categoryCash = [];
 
    for (let categoryItem of this.categories) {
      let sum = 0;
      for (let item of this.sortedByDate) {
        if (categoryItem.category === item.category) {
          if (condition === "income" ? (item.cash > 0) : (item.cash < 0)) {
            sum += item.cash;
          }
        }
      }
      if (sum)
        this.categoryCash.push(new CategoryCash(categoryItem.category, sum));
    }
    if (this.selected.indexOf(condition) === -1)
      this.selected = condition;
  }
}



