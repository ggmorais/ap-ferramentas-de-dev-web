import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
  // Declarações
  declarations: [
    AppComponent
  ],
  // Importações
  imports: [
    BrowserModule
  ],
  providers: [],
  // Bootstrap
  bootstrap: [AppComponent]
})

export class AppModule { }
