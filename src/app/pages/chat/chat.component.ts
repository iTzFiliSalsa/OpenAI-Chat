import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from 'src/app/libs/infraestructure/channel.service';
import { Message } from 'src/app/libs/infraestructure/interfaces/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public form: FormGroup;
  public messages: Array<Message>;

  constructor(
    private formBuilder: FormBuilder,
    public _channel: ChannelService
  ){
    this.messages = new Array<Message>();
    this.form = this.formBuilder.group({
      message: ['', [Validators.required]]
    });
  }

  public ngOnInit(): void {
  }

  public onEnter(): void{
    if(this.form.get("message")?.value == ""){
      return;
    }

    this.messages.push({isEmisor: true, message: this.form.get("message")?.value, date: new Date(), idChannel: this._channel.idChannel});
    this.form.get("message")?.patchValue("");
  }

}
