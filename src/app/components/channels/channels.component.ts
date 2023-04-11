import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from 'src/app/libs/functions/utils';
import { ChannelService } from 'src/app/libs/infraestructure/channel.service';
import { Channel } from 'src/app/libs/infraestructure/interfaces/channels';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent {

  private util: Utils;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public _channel: ChannelService
  ){
    this.util = new Utils(router, activatedRoute, _channel);
  }

  public changeChannel(idChannel: number){
    this.util.changeChannel(idChannel);
  }
}
