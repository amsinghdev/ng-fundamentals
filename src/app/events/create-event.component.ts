import {Component, Inject} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  template: `<h1> Create Event Form</h1>
  <hr>
  <div class="col-md-6">
    <h3>[Create Event Form..Please Enter all details]</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn btn-default" (click)="cancel()">Cancel</button>
  </div>`
})
export class CreateEventComponent {
  constructor(@Inject(Router)private router:Router) {
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
