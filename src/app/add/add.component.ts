import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service'
import { Info } from '../info';

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

  items: Info[] = [];

  constructor(private dataService: InfoService){}
   
  ngOnInit(){
      this.items = this.dataService.getData();
  }

  add(category: string, subcategory: string, person: string, cash: number, date: string, comment: string) {
    this.items.push(new Info(category, subcategory, person, cash, date, comment))
  }
}



