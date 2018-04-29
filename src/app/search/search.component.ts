import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TestService } from '../services/index';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SearchCriteria } from '../models/searchcriteria.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;
  measurementList: String[] = [];
  userList: String[] = [];
  searchCriteria: SearchCriteria = new SearchCriteria();
  constructor(private testService: TestService, private _fb: FormBuilder) { }

  ngOnInit() {

    this.searchForm = this._fb.group({
      formulaId: [''],
      version: [''],
      userName: [''],
      measurementName: ['']
  });

    this.testService.getMeasurementTypes().subscribe(
      data => {
          this.measurementList = this.measurementList.concat(data);

      },
      error => {

      });


    this.testService.getUsers().subscribe(
      data => {
          this.userList = this.userList.concat(data);

      },
      error => {

      });

  }

  search(model: FormGroup) {
    this.searchCriteria = new SearchCriteria();
    this.searchCriteria.measurementName = model.value.measurementName;
    this.searchCriteria.userName = model.value.userName;
    this.searchCriteria.version = model.value.version;
    this.searchCriteria.formulaId = model.value.formulaId;
    console.log(this.searchCriteria);

  }


}
