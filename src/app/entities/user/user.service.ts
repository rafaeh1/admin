import { Injectable } from '@angular/core';
import { Headers, Response, URLSearchParams } from '@angular/http';


import { DataService } from "../../data/data.service";

@Injectable()
export class UserService {

    constructor(
        private dataService: DataService
    ) { }

    public getAllowedRolesList(): Promise<Array<{ key: string, name: string }>> {
        return new Promise((resolve, reject) => {
            this.dataService.Get("/user-roles")
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(JSON.parse(err._body)) })
        });
    }

    public newUser(params) {
        return new Promise((resolve, reject) => {
            this.dataService.Post("/users", params)
                .then((response) => resolve(JSON.parse(response._body)))
                .catch((err) => reject(JSON.parse(err._body)))
        });
    }

    public getList(query) {
        console.log("Query", query);

        return new Promise((resolve, reject) => {
            this.dataService.Get("/users", { query: query })
                .then((response) => { resolve(JSON.parse(response._body)) })
                .catch((err) => { reject(JSON.parse(err._body)) })
        });
    }

    public getUser(userId: string) {
        return new Promise((resolve, reject) => {
            this.dataService.Get("/users/user", { userId: userId })
                .then((response) => {
                    let _body = JSON.parse(response._body);

                    if (_body.Count == 1)
                        resolve(_body.Items[0])
                })
                .catch((err) => { reject(JSON.parse(err._body)) })
        });
    }

    public updateUser(params) {
        return new Promise((resolve, reject) => {
            this.dataService.Post("/users/user", params)
                .then((response) => {
                    
                    let _body = JSON.parse(response._body);
                    console.log("_body.Item",_body.Item);
                        resolve(_body.Item)
                })
                .catch((err) => { console.log("err", err); reject(JSON.parse(err._body)) })
        });
    }

}