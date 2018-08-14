import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  constructor() { }

  @Output()
  public notify: EventEmitter<string> = new EventEmitter<string>();

  public onNotify(text: string): void
  {
    this.notify.emit(text);
  }
  
  ngOnInit() {
  }

}
