import {Component, Inject, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../shared";

@Component({
  templateUrl: 'event-details.component.html',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px}
  .event-image {height: 100px}`]
})

export class EventDetailsComponent  implements OnInit{

  event: IEvent;
  filterBy: string = 'all'
  sortBy:string = 'name'
  constructor(@Inject(EventService)private eventService: EventService, @Inject(ActivatedRoute) private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); //+ used to convert num from str
  }

}
