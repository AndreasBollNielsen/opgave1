import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPalComponent } from './my-pal/my-pal.component';
import { GeometryComponent } from './geometry/geometry.component';
import { FormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { TrapezComponent } from './trapez/trapez.component';
import { ParallelogramComponent } from './parallelogram/parallelogram.component';


@NgModule({
  declarations: [
    AppComponent,
    MyPalComponent,
    GeometryComponent,
    RectangleComponent,
    SquareComponent,
    TrapezComponent,
    ParallelogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
