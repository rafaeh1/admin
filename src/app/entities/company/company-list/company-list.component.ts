import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { MdDialog } from '@angular/material';

import { CompanyFormComponent } from "../company-form/company-form.component";

import { CompanyService } from "../company.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, AfterContentChecked {

  public title = "Compañias";

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
    public companyService: CompanyService
  ) {
    this.searchForm.valueChanges.subscribe(data => this.changueSearchForm(data));
    this.Filter();
  }

  ngOnInit() {
  }

  public new() {
    let dialogRef = this.dialog.open(CompanyFormComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => { if (result) this.Filter(); });
  }

  public edit(uuid) {
    let dialogRef = this.dialog.open(CompanyFormComponent, { disableClose: true, data: { uuid: uuid } });
    dialogRef.afterClosed().subscribe(result => { if (result) this.Filter(); });
  }


  public list: CompanyInList[] = [];

  public total: number = 0;
  public indexBegin: number = 0;
  public indexEnd: number = 0;

  public searchControls = {
    field: new FormControl("")
  }
  public searchForm = this.fb.group(this.searchControls);
  private changueSearchForm(data) {
    data = data.field;
    this.query.queryString = data;
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
    orderBy: "name",
    sortType: "asc",
    size: 25,
    queryString: ""
  }

  private timeoutHandle;
  private Filter() {
    clearTimeout(this.timeoutHandle);
    if (this.Busy) return;

    this.timeoutHandle = setTimeout(() => {
      this.Busy = true;

      this.query.queryString = this.searchControls.field.value;

      this.companyService.getList(this.query)
        .then((response) => {

          this.list = response["items"];

          this.total = response["total"];
          this.indexBegin = response["indexBegin"];
          this.indexEnd = response["indexEnd"];

          this.pageTop = response["pageTop"];
          this.query.page = response["page"];

          this.Busy = false;
        })

    }, 500);

  }

  public dateNow = new Date().getTime();
  public ngAfterContentChecked() {
    this.dateNow = new Date().getTime();
  }

}

export interface CompanyInList {
  logo: string,
  name: string,
  key: string,
  management_full_name: string,
  email: string,
  phone: string,
  enabled: boolean,
}