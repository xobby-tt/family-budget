import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Item } from '../item';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  items: Item[] = [];
  constructor(private dataService: DataService){}
   
  ngOnInit(){
      this.items = this.dataService.getData();
  }
}



