import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChannelComponent} from './channel.component';
import {ChannelDetailsComponent} from '../channel-details/channel-details.component';

const routes: Routes = [
  {
    path:'channel', component: ChannelComponent,
    children: [
      {
        path: ':lang',
        component: ChannelDetailsComponent,
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
