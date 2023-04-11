import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/libs/functions/utils';
import { ChannelService } from 'src/app/libs/infraestructure/channel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
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
