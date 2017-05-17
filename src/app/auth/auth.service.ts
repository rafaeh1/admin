import { Injectable } from '@angular/core';

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
    ) { }

    public authenticate(user: string, password: string, callback: AuthServiceCallback) {
        this.cognitoService.configUpdate("anything", "anything");

        let authenticationDetails = this.cognitoService.newAuthenticationDetails(user, password);
        let cognitoUser = this.cognitoService.newCognitoUser(user);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {

                let logins = {}
                logins["cognito-idp." + environment.AWS.region + ".amazonaws.com/" + environment.AWS.userPoolId] = result.getIdToken().getJwtToken();

                this.awsService.AWS.config.credentials = new this.awsService.AWS.CognitoIdentityCredentials({
                    IdentityPoolId: environment.AWS.identityPoolId,
                    Logins: logins
                });

                this.awsService.AWS.config.credentials.get((err) => {
                    if (!err) {
                        callback.authServiceCallback(result, null);
                    }
                    else callback.authServiceCallback(null, this.handleError(err));
                });

            },
            onFailure: (err) => callback.authServiceCallback(null, this.handleError(err))
        });
    }

    public logout() {
        this.cognitoService.CurrentUser.signOut();
        this.router.navigate(["/login"]);
    }

    private handleError(error: any): string {
        let errorMessage: string = LoginErrorMensajes[error.message];

        if (errorMessage) return errorMessage;
        else {
            console.error(error);
            return "Error inesperado.";
        }
    }

}

export interface AuthServiceCallback {
    authServiceCallback(result: any, errorMessage: string): void;
}