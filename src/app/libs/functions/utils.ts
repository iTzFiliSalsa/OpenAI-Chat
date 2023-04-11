import { ActivatedRoute, Router } from "@angular/router";
import { ChannelService } from "../infraestructure/channel.service";

export class Utils {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private _channel: ChannelService
    ) { }

    public changeChannel(idChannel: number) {
        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams: { id: idChannel },
                queryParamsHandling: 'merge',
            });
        this._channel.idChannel = idChannel;
    }
}