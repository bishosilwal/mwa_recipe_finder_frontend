import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import DishType from '../types/dishType';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-dish-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dish-form.component.html',
  styleUrl: './dish-form.component.css',
})
export class DishFormComponent implements OnInit {
  @Output()
  formSubmit = new EventEmitter();

  formData: DishType = {} as DishType;
  isCreate: boolean = true;
  isEdit: boolean = false;
  responseMessage: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _dishService: DishService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.isCreate = this._route.routeConfig?.path === 'dishes/create/form';
    this.isEdit = this._route.routeConfig?.path?.split('/').at(-1) == 'edit';
    if (this.isEdit) {
      this._route.params.subscribe((params) => {
        let id = params['id'];
        this._dishService.findById(id).subscribe((data) => {
          this.formData = data;
        });
      });
    }
  }

  addNewIngredient() {
    if (!this.formData.ingredients) this.formData.ingredients = [];
    this.formData.ingredients.push({
      name: '',
      amount: 0,
      unit: '',
    });
  }

  onSubmit() {
    if (this.isCreate) {
      this._dishService.create(this.formData).subscribe((res: any) => {
        this.responseMessage = res['message'];
        this.formData = {} as DishType;
        this._router.navigate(['/dishes/', res['dish']['_id']], {
          state: { message: 'Dish created successfully' },
        });
      });
    } else {
      this._dishService.update(this.formData).subscribe((res: any) => {
        this.responseMessage = res['message'];
        this.formData = res['dish'];
      });
    }
  }
}
