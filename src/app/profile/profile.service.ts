import { Injectable } from '@angular/core';

import { CognitoService } from "../aws/cognito.service";

@Injectable()
export class ProfileService {

    constructor(
        private cognitoService: CognitoService
    ) { }


    public refreshProfile(): Promise<Profile> {
        return new Promise((resolve, reject) => {
            this.cognitoService.getUserAttributes().then((result) => {
                this.profile = <Profile>{};

                result.forEach(element => {
                    let key = element.Name;
                    switch (key) {
                        case "custom:name": { this.profile.name = element.Value } break;
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

}

export interface Profile {
    name: string;
    lastName: string;
}