import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './dish/dish.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dishes',
    pathMatch: 'full',
  },
  {
    path: 'dishes',
    component: DishesComponent,
  },
  {
    path: 'dishes/:id',
    component: DishComponent,
  },
];
