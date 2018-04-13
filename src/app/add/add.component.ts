import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { InfoService } from '../info.service';
import { Info } from '../info';

import { CategoryService } from '../category.service';
import { Category } from '../category';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  today: Date = new Date();

  category: string;
  subcategory: string;
  person: string;
  cash: number;
  date: string;
  comment: string;

  items: Info[] = [];
  categories: Category[] = [];

  selectedCategory: Category;

  constructor(private infoService: InfoService, private categoryService: CategoryService, private location: Location) { }

  ngOnInit() {
    this.getInfo();
    this.getCategories();
  }

  getInfo(): void {
    this.infoService.getInfo().subscribe(info => this.items = info);
  }

  getCategories(): void {
    this.categoryService.getCategory().subscribe(category => this.categories = category);
  }

  
  add(category: string, subcategory: string, person: string, cash: number, dateString: string, comment: string) {
    var date: Date;

    if(!date) {
      date = this.today;
    } else date = new Date(dateString);

    this.infoService.addInfo(category, subcategory, person, cash, date, comment);
    this.location.back();
  }

  selectPerson(item: string): void{
    this.person = item;
  }

  selectCategory(item: Category): void {
    this.category = item.category;
    this.selectedCategory = item;
  }

  selectSubcategory(item: string): void {
    this.subcategory = item;
  }

  showDate(): string {
    return this.today.getDate().toString() + "/" + this.today.getMonth().toString() + "/" + this.today.getFullYear().toString()
  }

  goBack(): void {
    this.location.back();
  }

  
  // onCashChange(e): void {
  //   if(this.isNumeric(e.target.value)) this.cash += e.target.value;
  // }

  // isNumeric(n): boolean {
  //   return !isNaN(parseFloat(n)) && isFinite(n);
  // }
}



