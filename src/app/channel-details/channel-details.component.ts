import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Route} from '@angular/router';
import {CommunicationService} from "../communication/communication.service";

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {

  public languageSelected: string = ' ';
  public inboxData = [];
  public editData;
  @Input('lang') public lang;
  constructor(public route:ActivatedRoute,  public commService:CommunicationService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.languageSelected = params.lang || this.lang;
    console.log('Language : ', params, this.lang);

      this.commService.getResources(params.lang || this.lang)
          .subscribe((data)=>{
            this.inboxData = data;
          })
    });
  }

  editRecord(data){
    console.log('COMPLETD DAT:', data)
    this.editData = data;
  }

  saveRecord(){
    console.log(this.editData.id, this.languageSelected, this.editData)
    this.commService.setResources(this.editData.id, this.languageSelected, this.editData)
        .subscribe((data)=>{

        })
  }

}
