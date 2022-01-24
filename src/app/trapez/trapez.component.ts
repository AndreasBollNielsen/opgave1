import { Component, OnInit } from '@angular/core';
import { SquareBase } from '../square-base';

@Component({
  selector: 'app-trapez',
  templateUrl: './trapez.component.html',
  styleUrls: ['./trapez.component.css']
})
export class TrapezComponent extends SquareBase implements OnInit {
  area: number;
  perimeter: Number;
  _length_a: number;
  _length_b: number;
  _width_a: number;
  _width_b: number;
  _height: number;
  _angle_b:number;

  public CalculateArea(length_a:number, width_b: number): number {
    this.area = (length_a + width_b) * this.calculateHeight(this._angle_b,this._length_b)/ 2
    return 0;
  }
  public CalculateCircumference(length_a: number,length_b:number, width_a: number,with_b:number): number {
    this.perimeter = length_a + length_b + width_a + with_b;
    return 0;
  }

  calculateHeight(angle:number, length_b:number):number
  {
    const h = Math.sin(angle)* length_b;
    return h;
  }

  constructor() {
    super();
    this.area = 0;
    this.perimeter = 0;
    this._length_a = 0;
    this._length_b = 0;
    this._width_a = 0;
    this._width_b = 0;
    this._height = 0;
    this._angle_b = 0;
  }
  ngOnInit(): void {
  }

}
