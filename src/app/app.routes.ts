import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './dish/dish.component';
import { DishFormComponent } from './dish-form/dish-form.component';

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
  {
    path: 'dishes/:id/edit',
    component: DishFormComponent,
  },
  {
    path: 'dishes/create/form',
    component: DishFormComponent,
  },
];
