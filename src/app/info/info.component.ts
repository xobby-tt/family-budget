import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service'
import { Info } from '../info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})

export class InfoComponent implements OnInit {

  items: Info[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info)
  }
}



