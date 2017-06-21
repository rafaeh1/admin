import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';

import { Location } from '@angular/common';

import { ProfileService } from "../../profile/profile.service";

@Injectable()
export class CompanyGuard implements CanActivate {

    constructor(private profileService: ProfileService, private router: Router, private location: Location) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.canActivate(route, state);
    }

    public canLoad(route: Route): Promise<boolean> {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    private checkLogin(url: string): Promise<boolean> {

        return new Promise((resolve, reject) => {
            this.profileService.GetProfile().then((profile) => {
                let result = profile.role_key == "HG_admin";

                if(!result) this.location.back();

                resolve(result);
            });
        });
    }
}