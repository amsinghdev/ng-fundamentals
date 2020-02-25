import {Component, Inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styles: [
    ` em{ padding-left: 10px ; float: right; color: #bd362f}`
  ]
})
export class LoginComponent {
  userName: string
  password: string
 mouseoverLogin: string

  constructor(@Inject(AuthService) private authService:AuthService,@Inject(Router)private  route:Router) {
  }

  login(formValues)
  {
    this.authService.loginUser(formValues.userName,formValues.password)
    this.route.navigate(['/events'])
  }

  cancel() {
    this.route.navigate(['/events'])
  }
}
