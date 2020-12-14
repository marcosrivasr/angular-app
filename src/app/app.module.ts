import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HeaderComponent } from './components/header/header.component';
import { TotalComponent } from './components/total/total.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ShoppingItemComponent,
    AddItemComponent,
    HeaderComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
