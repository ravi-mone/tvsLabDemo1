import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelComponent } from './channel.component';
import { ChannelDetailsComponent } from '../channel-details/channel-details.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ChannelRoutingModule,
    SharedModule
  ],
  declarations: [ChannelComponent]
})
export class ChannelModule { }
