import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app';       // AppComponent is standalone
import { ColorComponent } from './color/color'; // ColorComponent is standalone

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,       // ✅ import instead of declare
    ColorComponent      // ✅ import instead of declare
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
