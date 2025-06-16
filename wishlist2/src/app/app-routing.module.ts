import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:'wishes',component: WishComponent},
  {path: 'todos', component: TodosComponent},
  {path:'contact',component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
