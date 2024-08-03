import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import DishType from '../types/dishType';
import { CommonModule } from '@angular/common';

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

  ngOnInit(): void {
    this.formData = structuredClone(this.dishInput);
  }

  onSubmit() {
    this.formSubmit.emit(this.formData);
  }
}
