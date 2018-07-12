import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[myVisibility]'
})
export class MyDirective1Directive{
        element: ElementRef;
    constructor(private el: ElementRef,private r:Renderer2){
        this.element = el;
        el.nativeElement.style.visibility='visible';
    }

    @HostBinding('style.visibility') eleVisibility;
    @Input('visible') visibility;
    
    ngOnInit(){
        this.eleVisibility=this.visibility;
    }
    
}