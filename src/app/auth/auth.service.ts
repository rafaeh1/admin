import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { LoginErrorMensajes } from "./auth.const";

import { AWSService } from "../aws/aws.service";
import { CognitoService, CognitoServiceCallback } from "../aws/cognito.service";

@Injectable()
export class AuthService {

    public isLoggedIn(): Promise<boolean> {
        return new Promise((resolve) => {
            this.cognitoService.CurrentSession.then((session) => {
                if (session) resolve(session.isValid());
                else resolve(false);
            });
        });
    }

    public redirectUrl: string;

    constructor(
        private awsService: AWSService,
        private cognitoService: CognitoService,
        public router: Router,
        private http: Http
    ) { }

    public authenticate(user: string, password: string, callback: AuthServiceCallback) {
        this.cognitoService.configUpdate("anything", "anything");

        this.getAuthConfig(user).then(() => {
            let authenticationDetails = this.cognitoService.newAuthenticationDetails(user, password);
            let cognitoUser = this.cognitoService.newCognitoUser(user);

            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: (result) => {

                    let logins = {}
                    logins["cognito-idp." + environment.AWS.region + ".amazonaws.com/" + environment.AWS.userPoolId] = result.getIdToken().getJwtToken();

                    // this.awsService.AWS.config.credentials = new this.awsService.AWS.CognitoIdentityCredentials({
                    //     IdentityPoolId: environment.AWS.identityPoolId,
                    //     Logins: logins
                    // });

                    // this.awsService.AWS.config.credentials.get((err) => {
                    //     if (!err) {
                    callback.authServiceCallback(result, null);
                    //     }
                    //     else callback.authServiceCallback(null, this.handleError(err));
                    // });

                },
                onFailure: (err) => callback.authServiceCallback(null, this.handleError(err)),
                newPasswordRequired: (userAttributes, requiredAttributes) => {
                    this.newPasswordChallengeUser = cognitoUser;
                    this.router.navigate(["/newpassword"]);
                }

            });
        }).catch(() => {
            callback.authServiceCallback(null, this.handleError({ message: "User does not exist." }));
        });

    }

    public logout() {
        this.cognitoService.clearCache();
        this.cognitoService.CurrentUser.signOut();
        
        localStorage.removeItem("authConfig");

        this.router.navigate(["/login"]);
    }

    public newPasswordChallengeUser;
    public newPasswordChallenge(newPassword: string, callback: AuthServiceCallback) {
        if (!this.newPasswordChallengeUser) {
            callback.authServiceCallback(null, "");
            return;
        }

        this.newPasswordChallengeUser.completeNewPasswordChallenge(newPassword, undefined, {
            onSuccess: (result) => callback.authServiceCallback(result, null),
            onFailure: (err) => callback.authServiceCallback(null, this.handleError(err))
        })
    }

    private handleError(error: any): string {
        let errorMessage: string = LoginErrorMensajes[error.message];

        if (errorMessage) return errorMessage;
        else {
            console.error(error);
            return "Error inesperado.";
        }
    }

    public getSession(): Promise<any> {
        return this.cognitoService.CurrentSession;
    }

    public getAuthConfig(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.HttpGet("/login/auth-config", { email: email }).then((authConfig) => {
                if (Object.keys(authConfig).length > 0) {
                    localStorage.setItem("authConfig", JSON.stringify(authConfig));
                    resolve();
                }
                else reject();
            });
        });
    }


    private HttpGet(url: string, params?): Promise<any> {
        return this.http.get(environment.APIGateway.endpoint + url, { params: params })
            .map(res => res.json())
            .toPromise();
    }

}

export interface AuthServiceCallback {
    authServiceCallback(result: any, errorMessage: string): void;
}