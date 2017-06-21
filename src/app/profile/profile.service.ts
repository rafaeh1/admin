import { Injectable } from '@angular/core';

import { CognitoService } from "../aws/cognito.service";

import { DataService } from "../data/data.service";

@Injectable()
export class ProfileService {

    constructor(
        private cognitoService: CognitoService,
        private dataService: DataService
    ) { }


    public refreshProfile(): Promise<Profile> {
        return new Promise((resolve, reject) => {
            this.cognitoService.getUserAttributes().then((result) => {
                this.profile = <Profile>{};

                result.forEach(element => {
                    let key = element.Name;
                    switch (key) {
                        case "name": { this.profile.name = element.Value } break;
                        case "custom:lastName": { this.profile.lastName = element.Value } break;
                    }
                });
                resolve(this.profile);
            }, (error) => {
                console.error(error);
                reject(error);
            });
        });
    }


    private profile: Profile = undefined;
    public subscribe(f: Function) {
        if (this.profile != undefined)
            f.call(undefined, this.profile);
        else {
            this.refreshProfile()
                .then(() => { f.call(undefined, this.profile); })
                .catch(() => { f.call(undefined, undefined); });
        }
    }


    public GetProfile(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dataService.Get("/users/profile")
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(err._body) })
        });
    }



}

export interface Profile {
    name: string;
    lastName: string;
}