import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  { path: 'task_1', component: AppTabeComponent },
  { path: 'task_2', component: AppStartPageComponent },
  { path: 'task_3', component: StreamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
