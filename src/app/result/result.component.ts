import { Input, Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service'
import { Info } from '../info';

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
  categories: string[] = [];
  categoryCash: CategoryCash[] = [];
  selectedIncome: boolean = true;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfo();
  }

  ngDoCheck() {
    this.sortByDate();
    this.sortByCategory();
    this.onSelect("income");
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info)
  }

  sortByDate(): void {
    var items = this.infoService.sortByDate(this.date);
    if (items)
      this.sortedByDate = items;
  }

  sortByCategory(): void {
    var temp: object = {};

    for (let item of this.sortedByDate) {
      if (temp[item.category] === undefined) {
        temp[item.category] = 0;
        this.categories.push(item.category);
      }
    }
  }

  getResult(): number {
    var temp: object = {};
    var sum: number = 0;

    for (let item of this.sortedByDate)
      sum += item.cash;

    return sum;
  }

  onSelect(condition: string): void {
    var sum = 0;
    this.categoryCash = [];

    for (let categoryItem of this.categories) {
      for (let item of this.sortedByDate) {
        if (categoryItem == item.category) {
          if (condition == "income" ? (item.cash > 0) : (item.cash < 0)) {
            sum += item.cash;
          }
        }
      }
        this.categoryCash.push(new CategoryCash(categoryItem, sum));
    }
  }
}



