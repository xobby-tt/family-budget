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
}



