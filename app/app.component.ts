import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colorType:string;
  visibility:string ='visible';
  listOfNames:string[] =['Mussie','Yonathan','Abiel','Kisanet'];

  showColoType(color){
    this.colorType=color;
  }
}
