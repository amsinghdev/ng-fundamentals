import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {EventService} from "../shared/event.service";
import {Inject, Injectable} from "@angular/core";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(@Inject(EventService)private eventService: EventService, @Inject(Router)private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id'])
    if(!eventExist) {
      this.router.navigate(['404'])
    }
    return eventExist
  }
}
