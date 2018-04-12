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

  constructor(private dataService: InfoService){}
   
  ngOnInit(){
      this.items = this.dataService.getData();
  }

  onDateChange() {
    this.condition = true;
  }
  
}



