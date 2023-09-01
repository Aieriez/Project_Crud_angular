import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private renderer: Renderer2, el : ElementRef) {
    this.renderer.setAttribute(el.nativeElement, 'style', 'color: red')
  }

}
