import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
