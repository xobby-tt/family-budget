import { Input, Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service'
import { Info } from '../info';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  @Input() date: Date[];

  items: Info[] = [];
  sorted: Info[];
  selectedIncome: boolean = true;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfo();
  }

  ngDoCheck() {
    this.sortByDate();
  }

  clearPrevData() {
    this.items = [];
    this.sorted = null;
  } 

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info)
  }

  sortByDate(): void {
    var items = this.infoService.sortByDate(this.date);
    if(items)
      this.sorted = items;
  }

  sortByCategory(): object {
    var temp: object = {};

    for (var i = 0; i < this.sorted.length; i++) {
      if (temp[this.sorted[i].category] === undefined) 
        temp[this.sorted[i].category] = 0;
    }

    for (var key in temp) {
      for (var i = 0; i < this.sorted.length; i++) {
        if (key == this.sorted[i].category)
          temp[key] += this.sorted[i].cash;
      }
    }

    return temp
  }

  result(): number {
      
    var sum: number = 0;
    var temp: object = this.sortByCategory();

    for (var item in temp)
      sum += temp[item];

    return sum;
  }

  onSelect(): void {
    this.selectedIncome = !this.selectedIncome;
  }
}



