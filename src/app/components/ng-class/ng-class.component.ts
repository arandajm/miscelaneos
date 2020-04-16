import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
})
export class NgClassComponent implements OnInit {
  alerta: string = 'alert-danger';
  loading: boolean = false;
  propiedades: any = {
    danger: true,
  };
  constructor() {}

  ngOnInit(): void {}

  cambiarBoton() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
