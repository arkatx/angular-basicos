import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './Contador/contador.module';
//import { ContadorComponent } from './Contador/contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
