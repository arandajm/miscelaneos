import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr />
    <app-css></app-css>
    <hr />
    <app-ng-class></app-ng-class>

    <br />
    <hr />
    <p [appResaltado]="'orange'">
      parrafo para usar la directiva resaltado
    </p>

    <br />
    <hr />
    <app-ng-switch></app-ng-switch>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
