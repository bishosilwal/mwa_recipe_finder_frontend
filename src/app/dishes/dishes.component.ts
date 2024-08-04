import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import DishType from '../types/dishType';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-dishes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.css',
})
export class DishesComponent implements OnInit {
  dishes: DishType[] = [] as DishType[];
  message: string = '';
  offset: number = 0;
  count: number = 5;
  totalCount: number = 0;
  search: string = '';

  constructor(private _dishService: DishService) {}

  ngOnInit(): void {
    this.fetchDishData();
  }

  fetchDishData() {
    this._dishService
      .getAll(this.offset, this.count)
      .subscribe((responseData: any) => {
        this.dishes = responseData['dishes'];
        this.offset = responseData['offset'];
        this.count = responseData['count'];
        this.totalCount = responseData['totalCount'];
      });
  }

  deleteDish(dish: DishType) {
    this._dishService.delete(dish).subscribe((responseData: any) => {
      this.message = responseData['message'];
      this.dishes = this.dishes.filter((d) => d._id != dish._id);
    });
  }

  searchChange(event: any) {
    this.search = event.target.value;
  }

  submitSearch() {
    if (!this.search) return;
    this._dishService.searchBy(this.search).subscribe((response: any) => {
      this.dishes = response['dishes'];
    });
  }

  prevClicked() {
    this.offset -= this.count;
    this.fetchDishData();
  }

  nextClicked() {
    this.offset += this.count;
    this.fetchDishData();
  }

  getPageCount() {
    return Math.ceil(this.totalCount / this.count);
  }

  getCurrentPage() {
    return 1 + Math.floor(this.offset / this.count);
  }

  isPreviousPageAvailable() {
    return this.getCurrentPage() > 1;
  }

  isNextPageAvailable() {
    return this.getPageCount() > this.getCurrentPage();
  }
}
