import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPalComponent } from './my-pal/my-pal.component';
import { GeometryComponent } from './geometry/geometry.component';
import { SquareBaseComponent } from './square-base/square-base.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPalComponent,
    GeometryComponent,
    SquareBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
