import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {CommunicationModule} from './communication/communication.module';
import {ChannelModule} from './channel/channel.module';
import {AboutModule} from './about/about.module';
import { MakeUpperPipe } from './make-upper.pipe';

const routes:Routes = [
  {path:'home', component : HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home' , pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    MakeUpperPipe
  ],
  imports: [
    BrowserModule,
    HomeModule,
    DashboardModule,
    CommunicationModule,
    ChannelModule,
    AboutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
