import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  @Input() total:number = 0;
  @Input() mensaje:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
