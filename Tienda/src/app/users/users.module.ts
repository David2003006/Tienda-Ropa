import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosusuariosComponent } from './todosusuarios/todosusuarios.component';



@NgModule({
  declarations: [
    TodosusuariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TodosusuariosComponent]
})
export class UsersModule { }
