import "chosen-js";

import { Directive, ElementRef, Input, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: "[chosen]"
})
export class ChosenDirective implements AfterViewInit, OnDestroy {
  @Input() refreshEventEmitter: EventEmitter<any>;
  @Output() change = new EventEmitter();

  constructor(private el: ElementRef) { }

  public ngAfterViewInit() {
    $(this.el.nativeElement).chosen();
    $(this.el.nativeElement).chosen().change((event, params) => this.chosenChange(event, params));
    this.refreshEventEmitter.subscribe(() => this.refresh());
  }

  private chosenChange(event, params) {
    this.change.emit($(this.el.nativeElement).chosen().val());
  }

  public refresh() {
    this.change.emit([]);
    setTimeout(() => { $(this.el.nativeElement).trigger("chosen:updated"); })
  }

  public ngOnDestroy() {
    this.change.emit([]);
  }
}