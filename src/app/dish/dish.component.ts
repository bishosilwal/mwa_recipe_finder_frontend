import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

type IngredientType = {
  name: string;
};

type DishType = {
  name: string;
  description: string;
  ingredients: IngredientType[];
};

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent implements OnInit {
  dish: DishType = {} as DishType;

  ngOnInit(): void {
    this.dish = {
      name: 'tea',
      description: 'tea description',
      ingredients: [
        {
          name: 'water',
        },
        {
          name: 'sugar',
        },
        {
          name: 'tea leaf',
        },
      ],
    };
  }
}
