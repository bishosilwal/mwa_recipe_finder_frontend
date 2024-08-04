import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import DishType from '../types/dishType';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-dish-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dish-form.component.html',
  styleUrl: './dish-form.component.css',
})
export class DishFormComponent implements OnInit {
  @Input('dish')
  dishInput: DishType = {} as DishType;

  @Output()
  formSubmit = new EventEmitter();

  formData: DishType = {} as DishType;
  isCreate: boolean = false;
  responseMessage: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _dishService: DishService
  ) {}

  ngOnInit(): void {
    this.isCreate = this._route.routeConfig?.path === 'dishes/create/form';
    if (!this.isCreate) this.formData = structuredClone(this.dishInput);
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
      });
    } else {
      this.formSubmit.emit(this.formData);
    }
  }
}
