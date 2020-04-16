import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  @Input('appResaltado')
  color: string = 'yellow';
  // Listen some event
  @HostListener('mouseenter') mouseOver() {
    this.changeBackgroundColor(this.color);
  }

  // Listen some event
  @HostListener('mouseleave') mouseLeave() {
    this.changeBackgroundColor(null);
  }
  constructor(private ref: ElementRef) {
    console.log('Directiva llamada!');
  }

  private changeBackgroundColor(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }
}
