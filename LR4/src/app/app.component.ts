import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<p>Варіант 6</p>
             <p>Введіть текст:</p>
             <input [(ngModel)]="text" placeholder="text">
             <child-comp [text] = "text"></child-comp>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text:string = "";
}
