import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  public dataFromChild :string = '';
  public propertyBinding :string = '';
  constructor() { }

  ngOnInit() {
  }

  saveDate(name){
    this.propertyBinding = name;
  }

  callCurrentClassFunction(data){
    this.dataFromChild = data;
  }

}
