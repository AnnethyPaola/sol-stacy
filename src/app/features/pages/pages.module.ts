import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { PagesRountingModule } from "./pages.routing.module";
import { PersonComponent } from "./person/person.component";
import { QueueComponent } from "./queue/queue.component";


@NgModule({
  declarations: [
    HomeComponent,
    PersonComponent,
    QueueComponent
  ],
  imports:[
    SharedModule,
    PagesRountingModule,
    RouterModule,
    CommonModule,
 
  ],

  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PagesModule { }