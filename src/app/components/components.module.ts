import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels/channels.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ChannelsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ChannelsComponent
  ],
})
export class ComponentsModule { }
