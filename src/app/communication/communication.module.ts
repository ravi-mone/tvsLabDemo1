import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { CommunicationComponent } from './communication.component';
import {FormsModule} from "@angular/forms";
import {CommunicationService} from "./communication.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[CommunicationService],
  declarations: [CommunicationComponent]
})
export class CommunicationModule { }
