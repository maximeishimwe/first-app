import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'card', component: CardComponent },
];
