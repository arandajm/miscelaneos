import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      ng-style works!
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary ml-1" (click)="tamano = tamano - 5">
      <i class="fa fa-plus"></i>
    </button>
  `,
})
export class NgStyleComponent implements OnInit {
  tamano: number = 30;
  constructor() {}

  ngOnInit(): void {}
}
