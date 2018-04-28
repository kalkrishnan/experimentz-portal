import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TestService } from '../services/index';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css'],
})
export class MeasurementComponent implements OnInit {

  measurementList: String[] = [];
  constructor(private testService: TestService, private _fb: FormBuilder) { }

  @Input()
  public measurementForm: FormGroup;

  ngOnInit() {


    this.testService.getMeasurementTypes().subscribe(
      data => {
        console.log(data);
          this.measurementList = this.measurementList.concat(data);

      },
      error => {

      });

  }

initReading() {
    return this._fb.group({
        control: [''],
        conditionName: ['', Validators.required],
        sample: ['']
    });
}

addReading() {
  const control = <FormArray>this.measurementForm.controls['readings'];
  control.push(this.initReading());
}

removeReading(i: number) {
  console.log("removing reading");
  const control = <FormArray>this.measurementForm.controls['readings'];
  control.removeAt(i);
}

}
