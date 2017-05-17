import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public observableMedia: ObservableMedia
  ) { }

  ngOnInit() {
  }

}