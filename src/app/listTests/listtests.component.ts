import { Test } from '../models/test.model';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/index';
import { User } from '../models/user.model';
import { Measurement } from '../models/measurement.model';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-listtests',
  templateUrl: './listtests.component.html',
  styleUrls: ['./listtests.component.css']
})
export class ListTestsComponent implements OnInit {
   displayedColumns = ['name', 'sample', 'condition'];
  testList: Test[] = [];
   user: User = new User();

  constructor(private testService: TestService)
  {
   this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    console.log(this.user);
    const httpGet$ = this.testService.getUserTests(this.user.id).subscribe(
      data => {
        console.log(data);
          this.testList = this.testList.concat(data);

      },
      error => {

      });


  }



}
