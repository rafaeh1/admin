import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

declare var AWS: any;

@Injectable()
export class AWSService {

    public get AWS(): any { return AWS; }

    constructor() {
        AWS.config.update({ region: environment.AWS.bucketRegion });
     }

}