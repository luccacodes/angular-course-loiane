import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor( private _elementRef: ElementRef, private _renderer: Renderer2 )  {
    this._renderer.setStyle(_elementRef.nativeElement, 'background-color', 'yellow');
  }
}
