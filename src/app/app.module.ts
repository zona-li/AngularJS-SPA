import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { TodosService } from './todos.service';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TabsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodosService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
