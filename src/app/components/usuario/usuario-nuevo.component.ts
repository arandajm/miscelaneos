import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
})
export class UsuarioNuevoComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // Access to the parent params, in this case id
    this.router.parent.params.subscribe((params) => {
      console.log('Ruta hija!!');
      console.log(params);
    });
  }
}
