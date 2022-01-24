
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css'],
})
export class MyPalComponent implements OnInit {

  myname: MyInterface = {name:'kent Brian Pedersen'};
  constructor() {}

  ngOnInit(): void {}
}

export interface MyInterface {
  name: string;
}
