import { Component, OnInit } from '@angular/core';

import { MainService } from "../../main/main.service";

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  public navs: Array<{ name: string, uri: string }>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getHamburgerMenuNavs().then((navs)=>{
      this.navs = navs;
    });
  }

}