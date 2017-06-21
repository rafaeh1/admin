import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { MdDialog } from '@angular/material';

import { UserFormComponent } from "../user-form/user-form.component";

import { UserService } from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public title = "Usuarios";

  private busy: boolean;
  public set Busy(value: boolean) {
    this.busy = value;
    if (value) {
      // this.searchForm.disable();
    }
    else {
      // this.searchForm.enable();
    }
  }
  public get Busy(): boolean { return this.busy; }

  constructor(
    public dialog: MdDialog,
    public fb: FormBuilder,
    public userService: UserService
  ) {
    this.searchForm.valueChanges.subscribe(data => this.changueSearchForm(data));
    this.Filter();
  }

  ngOnInit() {
  }

  public new() {
    let dialogRef = this.dialog.open(UserFormComponent, { disableClose: true, data: {} });
    dialogRef.afterClosed().subscribe(result => { if (result) this.Filter(); });
  }

  public edit(userId) {
    let dialogRef = this.dialog.open(UserFormComponent, { disableClose: true, data: { userId: userId } });
    dialogRef.afterClosed().subscribe(result => { if (result) this.Filter(); });
  }

  public list: UserInList[];

  public total: number = 0;
  public indexBegin: number = 0;
  public indexEnd: number = 0;

  public searchControls = {
    field: new FormControl("")
  }
  public searchForm = this.fb.group(this.searchControls);
  private changueSearchForm(data) {
    data = data.field;
    this.query.queryString.field = data;
    this.Filter();
  }
  private searchResetField() {
    this.searchForm.controls.field.reset("");
  }
  public searchUnderlineStyle;


  private sort(term: string) {
    if (term != this.query.orderBy) {
      this.query.orderBy = term;
      this.query.sortType = "asc";
    }
    else
      this.query.sortType = this.query.sortType == "asc" ? "desc" : "asc";

    this.Filter();
  }

  private pageTop = 1;
  private nextPage() { if (this.query.page >= this.pageTop || this.Busy) return; this.query.page++; this.Filter(); }
  private previousPage() { if (this.query.page <= 1 || this.Busy) return; this.query.page--; this.Filter(); }

  public query = {
    page: 1,
    orderBy: "full_name",
    sortType: "asc",
    size: 25,
    queryString: { field: "" }
  }

  private timeoutHandle;
  private Filter() {
    clearTimeout(this.timeoutHandle);
    if (this.Busy) return;

    this.timeoutHandle = setTimeout(() => {
      this.Busy = true;

      this.query.queryString.field = this.searchControls.field.value;

      this.userService.getList(this.query)
        .then((response) => {

          console.log("respo", response);


          this.list = response["Items"];

          this.total = response["total"];
          this.indexBegin = response["indexBegin"];
          this.indexEnd = response["indexEnd"];


          this.pageTop = Math.ceil(this.total / this.query.size);
          if (this.query.page > this.pageTop)
            this.query.page = this.pageTop;

          this.Busy = false;
        })

    }, 500);
  }

}

export interface UserInList {
  enabled: boolean,
  role_key: string,
  role_name: string,
  last_name: string,
  company_key: string,
  company_name: string,
  userId: string,
  group_key: string,
  group_name: string,
  hotel_key: string,
  hotel_name: string,
  email: string,
  name: string,
  full_name: string
}