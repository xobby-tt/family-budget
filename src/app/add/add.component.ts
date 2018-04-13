import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';
import { Info } from '../info';

import { CategoryService } from '../category.service';
import { Category } from '../category'

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

  add(category: string, subcategory: string, person: string, cash: number, date: Date, comment: string) {
    if(!date) {
      date = this.today;
    }
    this.infoService.addInfo(category, subcategory, person, cash, date, comment);
  }

  selectPerson(item: string): void{
    this.person = item;
  }

  items: Info[] = [];
  categories: Category[] = [];

  selectedCategory: Category;

  constructor(private infoService: InfoService, private categoryService: CategoryService) { }

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
}



