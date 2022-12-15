import { NgModule } from '@angular/core';
import { AppChildModule } from './app.child.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
