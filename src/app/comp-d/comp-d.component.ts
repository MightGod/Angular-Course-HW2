import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp-d',
  templateUrl: './comp-d.component.html',
  styleUrls: ['./comp-d.component.css']
})
export class CompDComponent implements OnInit {

  public text: string = "";

  @Output()
  public notify: EventEmitter<string> = new EventEmitter<string>();

  public sendText(): void
  {
    this.notify.emit(this.text);
  }

  constructor() { }

  ngOnInit() { }
}
