import { Injectable } from '@angular/core';

import { DataService } from "../data/data.service";

@Injectable()
export class MainService {

    constructor(
        private dataService: DataService
    ) { }

    private heroesUrl = 'api/heroes';  // URL to web api

    public getHamburgerMenuNavs(): Promise<Array<{ name: string, uri: string }>> {
        return new Promise((resolve, reject) => {
            this.dataService.Get("/access/hamburger-menu")
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(err) })
        });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}