import { Injectable } from '@angular/core';
import { Channel } from './interfaces/channels';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private idChanel: number;
  private arrayChannels: Array<Channel>;

  constructor() {
    this.idChanel = 1;
    this.arrayChannels = new Array<Channel>();
  }

  public get idChannel(){
    return this.idChanel;
  }

  public set idChannel(idChannel: number){
    this.idChanel = idChannel;
  }

  public set array(array: Array<Channel>){
    this.arrayChannels = array;
  }

  public get array(){
    return [
      {
        id: 1,
        name: "CV"
      },
      {
        id: 2,
        name: "Tickets"
      }
    ];
  }
}
