import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input [(ngModel)]="a" placeholder="a">
              <label> x^2 + </label>
              <input [(ngModel)]="b" placeholder="b">
              <label> x + </label>
              <input [(ngModel)]="c" placeholder="c">
              <label> = 0 </label>
              {{res()}}
              <h1> {{ans}} </h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  a = 0;
  b = 0;
  c = 0;
  ans = '';
  /**
   * ans
   */
  public res() {
    var D = this.b * this.b - 4 * this.a * this.c;
    if(this.a == 0)
    {
      this.ans = 'x = ' + String(-1 * this.c / this.b)
    }
    else if(D < 0)
    {
      this.ans = 'no answer(D<0)';
    }
    else if(D == 0)
    {
      this.ans = 'x = ' + String(-1 * this.b / (2 * this.a));
    }
    else
    {
      this.ans = 'x1 = ' + String((-1 * this.b + Math.sqrt(D)) / (2 * this.a)) + ' x2 = ' + String((-1 * this.b - Math.sqrt(D)) / (2 * this.a));
    }
  }
}
