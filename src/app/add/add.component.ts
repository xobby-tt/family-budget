import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  infoForm: FormGroup;
  categories: Category[] = [];
  isDateSelected: boolean = false;

  selectedCategory: Category;

  personStates = [
    {name: 'муж'},
    {name: 'жена'},
    {name: 'сын'}
  ];

  constructor(private infoService: InfoService, private categoryService: CategoryService, private location: Location,  public form: FormBuilder) { }

  ngOnInit() {
    this.getCategories();

    this.buildForm();
  }

  public buildForm() {
    this.infoForm = this.form.group({
      categoryState: ['', Validators.required],
      subcategoryState: [''],
      personState: ['',  Validators.required],
      cash: ['',  Validators.required],
      date: [''],
      comment: [''],
    });
  }

  getCategories(): void {
    this.categoryService.getCategory().subscribe(category => this.categories = category);
  }

  onSubmit() {

    if(!this.infoForm.value.date) {
      this.infoForm.value.date = this.today;
    } else this.infoForm.value.date = new Date(this.infoForm.value.date);

    this.infoService.addInfo(this.infoForm.value.categoryState.category, this.infoForm.value.subcategoryState, this.infoForm.value.personState.name, +this.infoForm.value.cash, this.infoForm.value.date, this.infoForm.value.comment)
    .subscribe(() => this.location.back()) ;
    // this.location.back();
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



