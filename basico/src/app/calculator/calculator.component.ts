import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  calcResult() {
    this.result = this.n1 + this.n2
  }

  clearResult() {
    this.result = 0
  }
}
