import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, EventEmitter, Output } from '@angular/core';

@Directive({
    selector:'[mynewcolor]'
})
export class MyColorDirective{
        element: ElementRef;

        possibleColors = [
            'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
            'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
          ];

    constructor(private el:ElementRef,private r:Renderer2){
        this.element=el;
        el.nativeElement.style.color='red';
    }

    @HostBinding('style.color') eleColor;
    @Input('color') color;

    @HostListener('click') newColor() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    
        this.eleColor = this.possibleColors[colorPick];
        this.messageEmitter.emit(this.eleColor);
      }

      @Output() messageEmitter = new EventEmitter();

    ngOnInit(){
        this.eleColor=this.color;
    }
}