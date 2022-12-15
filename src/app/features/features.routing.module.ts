import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExceptionComponent } from "./exception/exception.component";


const routes: Routes = [

  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },



  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: ExceptionComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureRoutingModule { }