import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MdSidenav } from "@angular/material";

import { ProfileService, Profile } from "../../profile/profile.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() sidenav: MdSidenav;

  public Title: string;
  public UserName: string;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.profileService.subscribe((profile: Profile) => {
      if (profile == undefined) return;

      this.UserName = profile.name;
    });

    this.router.events.subscribe(() => {
      if (this.route.firstChild)
        this.Title = this.route.firstChild.data["value"].title;
    })

  }

  public sidenavToggle() {
    this.sidenav.toggle();
  }

  public logout() {
    this.authService.logout();
  }

}