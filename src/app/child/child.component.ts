import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MakeUpperPipe} from "../make-upper.pipe";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ChildComponent implements OnInit, OnChanges {
  public result;
  @Input('inputData') public inputData;

  @Output() public emitToParent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    //CALLING THE PIPE SIDE COMPONENT
    let p = new MakeUpperPipe();
    this.result = p.transform(this.inputData);
    this.emitToParent.emit(this.result)
  }

}
