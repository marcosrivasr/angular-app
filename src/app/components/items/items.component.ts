import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  total:number = 0;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {

    /* this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 20,
        quantity: 4,
        completed: false
      },
      {
        id: 0,
        title: 'leche',
        price: 20,
        quantity: 4,
        completed: true
      }
    ];*/

    //this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.getTotal();
    });
  } 

  deleteItem(item: Item){
    this.items = this.items.filter(i => i.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  addItem(item:Item){
    console.log(item);
    this.itemService.addItem(item).subscribe(i => {
      this.items.unshift(i);
      this.getTotal();
    });
  }

  toggleItem(item:Item){
    this.itemService.toggleCompleted(item).subscribe(i => {})
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
    .filter(item => item.completed === false)
    .map(item => item.price * item.quantity)
    .reduce((acc, item) => acc += item, 0);
  }


}
