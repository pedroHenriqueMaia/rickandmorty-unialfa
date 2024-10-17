import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.highlightCharacter(this.appHighlight);
  }

  private highlightCharacter(status: string): void {
    if (status === 'Alive') {
      this.el.nativeElement.style.border = '2px solid green';
    } else if (status === 'Dead') {
      this.el.nativeElement.style.border = '2px solid red';
    } else {
      this.el.nativeElement.style.border = '2px solid gray';
    }
  }
}
