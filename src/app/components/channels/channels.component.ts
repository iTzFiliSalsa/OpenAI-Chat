import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from 'src/app/libs/infraestructure/channel.service';
import { Channel } from 'src/app/libs/infraestructure/interfaces/channels';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  public channels: Array<Channel>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public _channel: ChannelService
  ){
    this.channels = new Array<Channel>();
  }

  public ngOnInit(): void {
    this.channels.push(
      {
        id: 1,
        name: "CV"
      },
      {
        id: 2,
        name: "Tickets"
      }
    )
  }

  public changeChannel(idChannel: number){
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: {id: idChannel}, 
        queryParamsHandling: 'merge',
      });
      this._channel.idChannel = idChannel;
  }
}
