import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component ({
  selector: 'event-thumbnail',
  template: `<div class="well hoverwell thumbnail" [routerLink]="['/events',event.id]">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngClass]="getEarlyClass()" [ngSwitch]= "event?.time">
      Time: {{event?.time}}
      <span *ngSwitchCase = "'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase ="'10:00 am'">(Late Start)</span>
      <span *ngSwitchCase ="'9:00 am'">(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">Location:
      {{event.location.address}}
      {{event.location.city}}
      {{event.location.country}}
    </div>
    <div *ngIf="event?.onlineUrl"> OnlineUrl:
        {{event.onlineUrl}}
    </div>
  </div>`,
  styles: [`
  .thumbnail {min-height: 210px}`]
})
export class EventsThumbnailComponent {
  @Input() event: any;
  getEarlyClass()
  {
    if(this.event && this.event.time == '8:00 am') {
      return ['green','bold']
    }
    return '';
  }
}
