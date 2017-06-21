import { Injectable } from '@angular/core';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataService {

    constructor(private http: Http, private authService: AuthService) { }


    public Post(url: string, params?, headers?): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.getSession().then((session) => {
                if (!headers) headers = new Headers();
                if (!params) params = {};
                headers.set("access_token", session.getAccessToken().getJwtToken());

                this.http.post(environment.APIGateway.endpoint + url, { params: params, headers: headers })
                    .toPromise()
                    .then(response => resolve(response))
                    .catch(err => reject(err));

            });
        });

    }

    public Get(url: string, params?): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.getSession().then((session) => {
                if (!params) params = {};

                params["access_token"] = session.getAccessToken().getJwtToken();

                this.http.get(environment.APIGateway.endpoint + url, { params: params })
                    .toPromise()
                    .then(response => resolve(response))
                    .catch(err => reject(err));

            });
        });
    }

    public Put(url: string, params?, headers?): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authService.getSession().then((session) => {
                if (!headers) headers = new Headers();
                if (!params) params = {};

                headers.set("access_token", session.getAccessToken().getJwtToken());

                this.http.put(environment.APIGateway.endpoint + url, "", { params: params, headers: headers })
                    .toPromise()
                    .then(response => resolve(response))
                    .catch(err => reject(err));

            });
        });

    }

}