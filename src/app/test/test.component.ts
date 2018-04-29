import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Test } from '../models/test.model';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public myForm: FormGroup;
  test: Test = new Test();

  constructor(private router: Router, private testService: TestService, private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this._fb.group({
            formulaId: ['', Validators.required],
            version: ['', Validators.required],
            name: ['', [Validators.required, Validators.minLength(5)]],
            measurements: this._fb.array([
                this.initMeasurement(),
            ]),
            specification: ['']
        });
    }
  initMeasurement() {
        return this._fb.group({

            measurementName: ['', Validators.required],
            readings: this._fb.array([
              this.initReading(),
          ])
        });
    }

    initReading() {
      return this._fb.group({
          control: [''],
          conditionName: ['', Validators.required],
          sample: ['']
      });
  }

addMeasurement() {
    const control = <FormArray>this.myForm.controls['measurements'];
    control.push(this.initMeasurement());
}

removeMeasurement(i: number) {
    console.log("removing measurement");
    const control = <FormArray>this.myForm.controls['measurements'];
    control.removeAt(i);
}

  save(model: FormGroup) {
    console.log("saving test");

    this.test.user = JSON.parse(localStorage.getItem('currentUser'));
    this.test.name = model.value.name;
    this.test.formulaId = model.value.formulaId;
    this.test.version = model.value.version;
    this.test.specification = model.value.specification;
    this.test.measurements = model.value.measurements;
    console.log(this.test.measurements);
    this.testService.createTest(this.test)
        .subscribe( data => {
          alert("Test created successfully.");
          window.location.reload();
        });

  }

}
