import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './dish/dish.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: DishesComponent,
  },
  {
    path: 'recipes/:id',
    component: DishComponent,
  },
];
