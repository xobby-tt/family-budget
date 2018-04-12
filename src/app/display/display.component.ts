import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service'
import { Info } from '../info';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  items: Info[] = [];

  constructor(private dataService: InfoService){}
   
  ngOnInit(){
      this.items = this.dataService.getData();
  }
}



