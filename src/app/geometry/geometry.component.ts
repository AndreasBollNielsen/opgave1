import { Component, OnInit } from '@angular/core';
import { SquareBase } from '../square-base';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css'],
})
export class GeometryComponent extends SquareBase {
  length: number = 0;
  width: number = 0;
  height: number = 0;
  area: number = 0;
  perimeter: number = 0;

  public CalculateArea(l: number, w: number): number {
    let area: number;
    if (this.height === 0) {
      area = l * w;
    } else {
      area = 0.5 * this.height * (l + w);
    }

    return area;
  }

  public CalculateCircumference(l: number, w: number): number {
    const perimeter: number = l * 2 + w * 2;
    return perimeter;
  }

  OnCalcArea() {
    this.area = this.CalculateArea(this.length, this.width);
  }

  OnCalcPerimeter() {
    this.perimeter = this.CalculateCircumference(this.length, this.width);
  }
}
