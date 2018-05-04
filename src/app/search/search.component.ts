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
      measurementName: [''],
      startDate: '',
      endDate: ''
  },  {validator: this.searchValidator});

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
    if ( model.value.startDate != null)
    {
      this.searchCriteria.startDate = model.value.startDate;
    }
    if (model.value.endDate != null)
    {
      this.searchCriteria.endDate = model.value.endDate;
    }
    console.log(this.searchCriteria);

  }

  reset() {
    this.searchForm.reset();
    this.searchCriteria = new SearchCriteria();
  }


  searchValidator(group: FormGroup) {
    for(const a in group.controls) {

      const val = <string>group.get([a]).value;

      if(val !=null && val.toString().length > 0)
      {
        console.log(JSON.stringify(val));
        return null;
      }
    }
    return { searchValidatorError : true } ;
  }



}
