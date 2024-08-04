import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DishFormComponent } from '../dish-form/dish-form.component';
import DishType from '../types/dishType';
import { DishService } from '../service/dish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule, DishFormComponent, RouterLink],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css',
})
export class DishComponent implements OnInit {
  dish: DishType = {} as DishType;
  message: string = '' as string;

  constructor(
    private _route: ActivatedRoute,
    private _dishService: DishService,
    private _router: Router
  ) {
    this.message =
      this._router.getCurrentNavigation()?.extras?.state?.['message'];
  }

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this._dishService.findById(id).subscribe((responseData) => {
      this.dish = responseData;
    });
  }
}
