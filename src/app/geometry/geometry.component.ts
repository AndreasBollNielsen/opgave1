import { Component, OnInit } from '@angular/core';
import { SquareBase } from '../square-base';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css'],
})
export class GeometryComponent extends SquareBase implements OnInit {
  length: number = 0;
  height: number = 0;

  public CalculateArea(length,height): number {


    const area = 0;
    return area;
  }

  constructor() {}

  ngOnInit(): void {}
}
