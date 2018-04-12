import { Input, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Item } from '../item';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  @Input() date: string;
  items: Item[] = [];
  condition: boolean = false;

  constructor(private dataService: DataService){}
   
  ngOnInit(){
      this.items = this.dataService.getData();
  }

  onDateChange() {
    this.condition = true;
  }
  
}



