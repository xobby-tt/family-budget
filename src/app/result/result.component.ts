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
    this.sortByDate();
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info)
  }

  sortByDate(): Info[] {
    return this.sorted = this.infoService.sortByDate(this.date);
  }

  sortByCategory(): object {
    var temp: object = {};

    for (var i = 0; i < this.items.length; i++) {
      if (temp[this.items[i].category] === undefined) 
        temp[this.items[i].category] = true;
    }

    for (var key in temp) {
      for (var i = 0; i < this.items.length; i++) {
        if (key == this.items[i].category)
          temp[key] += this.items[i].cash;
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



