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

  items: Info[] = [];
  sortedByDate: Info[] = [];
  categories: Category[];
  categoryCash: CategoryCash[] = [];
  selected: string = "income";

  constructor(private infoService: InfoService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getInfo();
    this.sortByDate();
    this.getCategories();
    this.onSelect("income");
  }

  ngDoCheck() {
    this.sortByDate();
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info)
  }

  getCategories(): void {
    this.categoryService.getCategory().subscribe(categories => this.categories = categories)
  }

  sortByDate(): void {
    var items = this.infoService.sortByDate(this.date);
    if (items)
      this.sortedByDate = items;
  }

  getResult(): number {
    var temp: object = {};
    var sum: number = 0;

    for (let item of this.sortedByDate)
      sum += item.cash;

    return sum;
  }

  onSelect(condition: string): void {
    this.categoryCash = [];

    for (let categoryItem of this.categories) {
      var sum = 0;
      for (let item of this.sortedByDate) {
        if (categoryItem.category == item.category) {
          if (condition == "income" ? (item.cash > 0) : (item.cash < 0)) {
            sum += item.cash;
          }
        }
      }
      if (sum)
        this.categoryCash.push(new CategoryCash(categoryItem.category, sum));
    }
    if (this.selected.indexOf(condition) == -1)
      this.selected = condition;
  }
}



