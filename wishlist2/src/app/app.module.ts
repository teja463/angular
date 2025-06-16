import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
import { AppRoutingModule } from './app-routing.module';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WishModule,
    ContactModule,
    TodosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
