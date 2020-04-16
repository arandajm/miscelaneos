import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css inide the component works!
    </p>
  `,
  styles: [
    `
      p {
        color: blue;
        font-size: 30px;
      }
    `,
  ],
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
