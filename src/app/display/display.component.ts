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

  constructor(private infoService: InfoService){}
   
  ngOnInit(){
      this.getInfo();
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info)
  }

  showDate(item: Date): string {
    return item.getDate().toString() + "/" + item.getMonth().toString() + "/" + item.getFullYear().toString()
  }

}



