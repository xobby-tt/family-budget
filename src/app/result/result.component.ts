import { Input, Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service'
import { Info } from '../info';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  @Input() date: string;
  items: Info[] = [];
  condition: boolean = false;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info)
  }
  
  onDateChange() {
    this.condition = true;
  }

}



