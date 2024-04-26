import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
