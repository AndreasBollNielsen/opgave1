import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SquareBase } from '../square-base';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent extends SquareBase implements OnInit {
  area: number;
  perimeter: Number;
  _length: number;


  public CalculateArea(length: number, height: number): number {
    this.area = length * height;
    return 0;
  }
  public CalculateCircumference(length: number, height: number): number {
    const perimeter: number = length * 2 + height * 2;
    this.perimeter = perimeter;
    return 0;
  }

  constructor() {
    super();
    this.area = 0;
    this.perimeter = 0;
    this._length = 0;

  }

  ngOnInit(): void {}
}
