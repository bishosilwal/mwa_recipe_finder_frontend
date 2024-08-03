import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dishes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.css',
})
export class DishesComponent implements OnInit {
  recipes: any[] = [];

  ngOnInit(): void {
    this.recipes = this.getRecipes();
  }

  getRecipes() {
    return [
      { id: '1', name: 'egg curdy' },
      { id: '2', name: 'masala tea' },
    ];
  }
}
