import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { ListItem } from './list-item'

@Component({
  selector: 'app-shop-list',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent {
  
  item: string = ''
  qtd: number = 0
  list: ListItem[] = []

  addItem() {
    let listItem = new ListItem()
    listItem.itemName = this.item
    listItem.itemQtd = this.qtd
    listItem.id = this.list.length

    this.list.push(listItem)
    
    this.item = ''
    this.qtd = 0
  }

  purchasedItem(listItem: ListItem) {
    listItem.purchased = !listItem.purchased

    console.table(this.list)
  }

  clearList() {
    this.list = []
  }
}
