import {Component, Inject, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "./shared";

@Component ({
  template: `<div>
  <h2>List of All Events</h2>
  <hr/>
    <div class="row">
     <div *ngFor="let eventSample of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(eventSample.name)" [event]="eventSample"></event-thumbnail>
      </div>
    </div>
</div>`
})

export class EventsListComponent implements OnInit{

  events:IEvent[]
  constructor(@Inject(EventService) private eventService: EventService, @Inject(ToastrService)private toastrService: ToastrService,
              @Inject(ActivatedRoute)private route:ActivatedRoute){
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events123']
  }


  handleThumbnailClick(eventName){
    this.toastrService.success(eventName,'Do u Know')
  }
}
