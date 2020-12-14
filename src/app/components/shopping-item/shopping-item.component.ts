import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';
import {ItemService } from '../../services/item.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() item:Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      item: true,
      'completed': this.item.completed
    };

    return classes;
  }

  onToggle(item){
    item.completed = !item.completed;
    /* this.itemService.toggleCompleted(item).subscribe(item => {
      
    }); */
    this.toggleItem.emit(item);
  }

  onDelete(item){
    this.deleteItem.emit(item);
  }

}
