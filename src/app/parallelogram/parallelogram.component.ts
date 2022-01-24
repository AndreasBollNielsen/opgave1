import { Component, OnInit } from '@angular/core';
import { SquareBase } from '../square-base';

@Component({
  selector: 'app-parallelogram',
  templateUrl: './parallelogram.component.html',
  styleUrls: ['./parallelogram.component.css']
})
export class ParallelogramComponent extends SquareBase implements OnInit {

  area: number;
  perimeter: Number;
  _length: number;
  _width: number;
  _height: number;

  public CalculateArea(length: number, height: number): number {
    this.area = height * length;
    return 0;
  }
  public CalculateCircumference(length: number, height: number): number {
    this.perimeter = 2 * length + 2* height;
    return 0;
  }

  constructor() {
    super();
    this.area = 0;
    this.perimeter = 0;
    this._length = 0;
    this._width = 0;
    this._height = 0;
  }

  ngOnInit(): void {
  }

}
