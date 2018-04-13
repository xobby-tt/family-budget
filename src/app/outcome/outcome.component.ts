import { Input, Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { SortedCategory } from '../sortedCategory'

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})

export class OutcomeComponent implements OnInit {

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

          if (key == this.items[i].category && this.items[i].cash < 0)
            flag = true;
            temp[key] += this.items[i].cash
        }
        if (flag) {
          array.push(new SortedCategory(key, temp[key]))
        }
      }
  
    }

    return array;
  }

}

