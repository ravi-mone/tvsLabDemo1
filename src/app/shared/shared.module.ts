import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChannelDetailsComponent} from "../channel-details/channel-details.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChannelDetailsComponent],
  exports:[ChannelDetailsComponent, FormsModule]
})
export class SharedModule { }
