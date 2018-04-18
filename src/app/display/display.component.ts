import { Component, OnInit, Input } from '@angular/core';

import { Info } from '../info';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent {

  @Input() items: Info[] = [];

  showDate(item: Date): string {
    return item.getDate() + "/" + (item.getMonth() + 1) + "/" + item.getFullYear()
  }

}



