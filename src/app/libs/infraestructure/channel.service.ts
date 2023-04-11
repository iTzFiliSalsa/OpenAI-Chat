import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private idChanel: number;

  constructor() {
    this.idChanel = 1;
  }

  public get idChannel(){
    return this.idChanel;
  }

  public set idChannel(idChannel: number){
    this.idChanel = idChannel;
  }
}
