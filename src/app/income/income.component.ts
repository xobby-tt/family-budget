import { Input, Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { SortedCategory } from '../sortedCategory'

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})

export class IncomeComponent implements OnInit {

  @Input() items: Info[];

  sorted: SortedCategory[];

  constructor() { }

  ngOnInit() {
    this.sorted = this.sortByCategory();
  }

  sortByCategory(): SortedCategory[] {
    var temp: object = {};
    var array: SortedCategory[] = [];

    for (var i = 0; i < this.items.length; i++) {
      if (temp[this.items[i].category] === undefined)
        temp[this.items[i].category] = 0;

      var flag: boolean = false;

      for (var key in temp) {
        for (var i = 0; i < this.items.length; i++) {
          flag = false;
          if (key == this.items[i].category && this.items[i].cash > 0) {
            temp[key] += this.items[i].cash
            flag = true;          
          }
        }
        if (flag) {
          array.push(new SortedCategory(key, temp[key]))
        }
      }
  
    }

    return array;
  }

}


