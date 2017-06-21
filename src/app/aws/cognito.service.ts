import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

declare var AWSCognito: any;

import { AWSService } from "./aws.service";

@Injectable()
export class CognitoService {

    public get AWSCognito(): any { return AWSCognito; }

    constructor(private awsService: AWSService) { }




    public get UserPool() {
        let authConfig = JSON.parse(localStorage.getItem("authConfig"));
        if (authConfig)
            return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool({
                UserPoolId: authConfig.user_pool_id,
                ClientId: authConfig.client_id
            });
    }

    public get CurrentUser() {
        let userpool = this.UserPool;
        if (userpool)
            return userpool.getCurrentUser();
    }


    public get CurrentSession(): Promise<any> {
        return new Promise((resolve) => {
            let cognitoUser = this.CurrentUser;
            if (cognitoUser) {
                cognitoUser.getSession((error, session) => {
                    if (error) resolve(false);
                    else resolve(session);
                });
            }
            else resolve(false);
        });
    }

    public get CognitoIdentity(): string {
        return this.awsService.AWS.config.credentials.identityId;
    }

    public getAccessToken(callback: CognitoServiceCallback): void {
        if (this.CurrentUser != null)
            this.CurrentUser.getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }

                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getAccessToken().getJwtToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    }

    public getIdToken(callback: CognitoServiceCallback): void {
        if (callback == null) {
            throw ("CognitoUtil: callback in getIdToken is null...returning");
        }
        if (this.CurrentUser != null)
            this.CurrentUser.getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    } else {
                        console.log("CognitoUtil: Got the id token, but the session isn't valid");
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    }

    public getRefreshToken(callback: CognitoServiceCallback): void {
        if (callback == null) {
            throw ("CognitoUtil: callback in getRefreshToken is null...returning");
        }
        if (this.CurrentUser != null)
            this.CurrentUser.getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }

                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getRefreshToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    }

    public refresh(): void {
        this.CurrentUser.getSession(function (err, session) {
            if (err) {
                console.log("CognitoUtil: Can't set the credentials:" + err);
            }

            else {
                if (session.isValid()) {
                    console.log("CognitoUtil: refreshed successfully");
                } else {
                    console.log("CognitoUtil: refreshed but session is still not valid");
                }
            }
        });
    }

    /////////
    public configUpdate(accessKeyId: string, secretAccessKey: string) {
        AWSCognito.config.update({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
    }


    public newAuthenticationDetails(username: string, password: string) {
        return new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails({ Username: username, Password: password });
    }

    public newCognitoUser(username: string) {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUser({
            Username: username,
            Pool: this.UserPool
        });
    }

    public getUserAttributes(): Promise<Array<{ Name: string, Value: string }>> {
        return new Promise((resolve, error) => {
            let cognitoUser = this.CurrentUser;

            if (cognitoUser != null) {
                cognitoUser.getSession((err, session) => {
                    if (err)
                        error();
                    else {
                        cognitoUser.getUserAttributes((err, result) => {
                            if (err) {
                                error();
                            } else {
                                resolve(result);
                            }
                        });
                    }

                });
            } else error();


        });
    }

    public clearCache() {
        if (this.awsService.AWS.config.credentials)
            this.awsService.AWS.config.credentials.clearCachedId();
    }

}

export interface CognitoServiceCallback {
    callback(): void;
    callbackWithParam(result: any): void;
}