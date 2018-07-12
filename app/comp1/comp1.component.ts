import {Component, Input} from '@angular/core';

@Component({
  selector:'app-comp1',
  template:`
        <div>
          <ul >
            <li *ngFor="let item of items; let i = index">{{item}} - (Index: {{i}})</li>
          </ul>
        </div>
  `,
  styles: ['.myBorder {border:2px solid red;}',
             '.myColor {color:green;}']

})

export class Comp1Component{
   @Input('listOfNames') items;
}