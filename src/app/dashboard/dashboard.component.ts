import { Component, OnInit } from '@angular/core';
import { MatTabsModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   activeLinkIndex = -1;
  constructor(private router: Router) {
    }

  ngOnInit(): void {
   }
}
