import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DishFormComponent } from '../dish-form/dish-form.component';
import DishType from '../types/dishType';
import { HttpClient } from '@angular/common/http';
import { DishService } from '../service/dish.service';

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

  constructor(
    private _route: ActivatedRoute,
    private _dishService: DishService
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this.isEdit =
      this._route.snapshot.routeConfig?.path?.split('/').at(-1) == 'edit';
    this._dishService.findById(id).subscribe((responseData) => {
      this.dish = responseData;
    });
  }

  formSubmit(formData: {}) {
    this.isEdit = false;
    console.log(formData);
  }
}
