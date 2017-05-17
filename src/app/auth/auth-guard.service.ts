import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

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
        let promise = this.authService.isLoggedIn();
        promise.then((isLoggedIn) => {
            if (isLoggedIn) return;

            this.authService.redirectUrl = url;
            this.router.navigate(['/login']);
        });

        return promise;
    }
}