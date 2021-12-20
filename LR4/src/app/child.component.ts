import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<button (click) = "reverser()">Reverse</button>
             <h2>Result: {{text}}</h2>`,
  styleUrls: ['./app.component.scss']
})
export class ChildComponent {
  @Input() 
  text!:string;

  reverser(){
      while(this.text.indexOf("a")!= -1){
        this.text = this.text.replace("a","!");
      }
      var splitstring = this.text.split("");
      var reversestring = splitstring.reverse();
      this.text = reversestring.join("");
  }
}
