import { Test } from '../models/test.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TestService } from '../services/index';
import { User } from '../models/user.model';
import { Measurement } from '../models/measurement.model';
import {MatTableModule} from '@angular/material/table';
import { SearchCriteria } from '../models/searchcriteria.model';

@Component({
  selector: 'app-listtests',
  templateUrl: './listtests.component.html',
  styleUrls: ['./listtests.component.css']
})
export class ListTestsComponent implements OnInit, OnChanges {
   displayedColumns = ['name', 'condition', 'sample', 'control'];
   displayedColumnsReadings = ['condition', 'sample', 'control'];
  testList: Test[] = [];
   user: User = new User();
   @Input() listCriteria: SearchCriteria;


  constructor(private testService: TestService)
  {
   this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    console.log(this.user);



  }

  ngOnChanges(changes: SimpleChanges) {
      let change = changes["listCriteria"];
      this.listCriteria = change.currentValue;
      if(this.emptyCriteria())
      {
        this.testList.length = 0;
      }
      else
      {
      const httpGet$ = this.testService.getTests(this.listCriteria).subscribe(
        data => {
          console.log(data);
          this.testList.length = 0;
            this.testList = this.testList.concat(data);

        },
        error => {

        });
      }
   }

   emptyCriteria()
   {
     if(this.listCriteria.formulaId == null && this.listCriteria.measurementName == null && this.listCriteria.userName == null && this.listCriteria.version == null && this.listCriteria.startDate == null && this.listCriteria.endDate == null)
     {
       return true;
     }
   }



}
