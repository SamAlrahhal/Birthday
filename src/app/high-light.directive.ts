import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit {
  @Input('appHighLight') highLightColor = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.highLightColor;
  }
}
