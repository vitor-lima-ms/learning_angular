import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component'
import { ShopListComponent } from './shop-list/shop-list.component';

@Component({
  selector: 'app-root',
  imports: [
    ShopListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basico';
}
