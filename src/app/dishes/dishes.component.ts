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

  constructor(private _dishService: DishService) {}

  ngOnInit(): void {
    this._dishService.getAll().subscribe((responseData) => {
      this.dishes = responseData;
    });
  }

  deleteDish(dish: DishType) {
    console.log(dish);
  }
}
