import { Component } from '@angular/core';

@Component({
  selector: 'app-equations',
  templateUrl: './equations.component.html',
  styleUrls: ['./equations.component.scss']
})
export class EquationsComponent {
  equation: string
  constructor(){
    this.equation = "$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$";
  }
}
