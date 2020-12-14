import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'; 
import { Item } from 'src/app/models/Item';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  title:string;
  price:number;
  quantity: number;
  @Output() addItem:EventEmitter<any> = new EventEmitter();

  constructor(private router:Router, private itemService:ItemService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    });

    /* this.addItem.emit(item);
    this.router.navigate(['/']);  */
  }

}
