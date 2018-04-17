import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  date: Date;
  comment: string;
  items: Info[] = [];
  categories: Category[] = [];
  selectedCategory: Category;
  isDateSelected: boolean = false;

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

  add(category: string, subcategory: string, person: string, cash: number, date: Date, comment: string) {

    if (!date) {
      date = this.today;
    }

    this.infoService.addInfo(category, subcategory, person, cash, date, comment);
    this.location.back();

  }

  selectPerson(item: string): void {
    this.person = item;
  }

  selectCategory(item: Category): void {
    this.category = item.category;
    this.selectedCategory = item;
    this.subcategory = "";
  }

  selectSubcategory(item: string): void {
    this.subcategory = item;
  }

  showDate(): string {
    return this.today.getDate() + "/" + (this.today.getMonth() + 1) + "/" + this.today.getFullYear()
  }

  toggleDatepicker(): void {
    this.isDateSelected = !this.isDateSelected;
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



