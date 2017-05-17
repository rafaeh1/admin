import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

    constructor() { }

    private heroesUrl = 'api/heroes';  // URL to web api

    public getHamburgerMenuNavs(): Promise<Array<{ name: string, uri: string }>> {
        return new Promise((resolve, reject) => {
            resolve([
                { name: "Usuarios", uri: "/admin/users" },
                { name: "Compañias", uri: "/admin/companies" },
                { name: "Grupos", uri: "/admin/groups" },
                { name: "Hoteles", uri: "/admin/hotels" },
            ]);
        });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}