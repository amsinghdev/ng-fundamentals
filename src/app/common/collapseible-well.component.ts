import {Component, Input} from "@angular/core";

@Component({
  selector: "collapsible-well",
  template: `<div (click) ="toggleContnet()" class="well pointable">
    <h4>
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
  </div>`
})
export class CollapseibleWellComponent {
 visible:boolean = true
  toggleContnet() {
    this.visible = !this.visible
  }
}
