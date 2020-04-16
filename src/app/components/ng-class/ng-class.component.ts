import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
})
export class NgClassComponent implements OnInit {
  alerta: string = 'alert-danger';
  propiedades: any = {
    danger: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
