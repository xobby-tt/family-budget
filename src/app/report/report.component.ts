import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Item } from '../item';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  date: string;
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



