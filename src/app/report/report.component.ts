import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {

  @Input() items: Info[] = [];

  date: Date[];
  condition: boolean = false;

  onDateChange() {
    this.condition = true;
  }
  
}



