import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  constructor() { }

  public text: string = "";

  public onNotify(text: string): void
  {
    this.text = text;
  }

  ngOnInit() {
  }

}