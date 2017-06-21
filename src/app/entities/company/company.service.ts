import { Injectable } from '@angular/core';

import { DataService } from "../../data/data.service";

@Injectable()
export class CompanyService {

    constructor(
        private dataService: DataService
    ) { }

    public getMap(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dataService.Get("/auth-companies")
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(JSON.parse(err._body)) })
        });
    }

    public newCompany(params) {
        return new Promise((resolve, reject) => {
            this.dataService.Post("/companies", params)
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(JSON.parse(err._body)) })
        });
    }

    public getList(query) {
        return new Promise((resolve, reject) => {
            this.dataService.Get("/companies", { query: query })
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(JSON.parse(err._body)) })
        });
    }

    public getCompany(uuid: string) {
        return new Promise((resolve, reject) => {
            this.dataService.Get("/companies/company", { company_uuid: uuid })
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(JSON.parse(err._body)) })
        });
    }

    public updateCompany(company_uuid, params) {
        params.company_uuid = company_uuid;
        return new Promise((resolve, reject) => {
            this.dataService.Post("/companies/company", params)
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { console.log(err); reject(JSON.parse(err._body)) })
        });
    }

}