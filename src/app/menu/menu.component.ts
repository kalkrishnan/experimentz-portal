import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.setLoggedIn();
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }

}
