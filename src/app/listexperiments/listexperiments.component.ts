import { Experiment } from '../models/experiment.model';
import { Component, OnInit } from '@angular/core';
import { ExperimentService } from '../services/index';
import { User } from '../models/user.model';
import { Ingredient } from '../models/ingredient.model';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-listexperiments',
  templateUrl: './listexperiments.component.html',
  styleUrls: ['./listexperiments.component.css']
})
export class ListexperimentsComponent implements OnInit {
   displayedColumns = ['name', 'sample', 'condition'];
   panelOpenState: boolean = false;
  experimentList: Experiment[] = [];
   user: User = new User();

  constructor(private experimentService: ExperimentService)
  {
   this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    var response;
    console.log(this.user);
    const httpGet$ = this.experimentService.getUserExperiments(this.user.id).subscribe(
      data => {
        console.log(data);
          this.experimentList = this.experimentList.concat(data);

      },
      error => {

      });


  }



}
