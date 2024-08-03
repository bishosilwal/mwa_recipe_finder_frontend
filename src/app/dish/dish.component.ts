import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DishFormComponent } from '../dish-form/dish-form.component';
import DishType from '../types/dishType';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule, DishFormComponent, RouterLink],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent implements OnInit {
  dish: DishType = {} as DishType;

  isEdit: boolean = false;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this.isEdit =
      this._route.snapshot.routeConfig?.path?.split('/').at(-1) == 'edit';
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

  formSubmit(formData: {}) {
    this.isEdit = false;
    console.log(formData);
  }
}
