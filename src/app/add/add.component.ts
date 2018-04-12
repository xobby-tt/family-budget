import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Item } from '../item';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  category: string;
  subcategory: string;
  person: string;
  cash: number;
  date: string;
  comment: string;

  items: Item[] = [];

  constructor(private dataService: DataService){}
   
  ngOnInit(){
      this.items = this.dataService.getData();
  }

  add(category: string, subcategory: string, person: string, cash: number, date: string, comment: string) {
    this.items.push(new Item(category, subcategory, person, cash, date, comment))
  }
}



