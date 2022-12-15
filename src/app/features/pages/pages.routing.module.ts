import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'person',
    component: PersonComponent,
  }, 

  {
    path: 'queue',
    component: QueueComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRountingModule { }