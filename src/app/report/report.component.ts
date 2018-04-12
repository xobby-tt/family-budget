import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {
  date: string;
  condition: boolean = false;

  onDateChange() {
    this.condition = true;
  }
  
}



