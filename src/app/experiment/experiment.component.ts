import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Experiment } from '../models/experiment.model';
import { ExperimentService } from '../services/experiment.service';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit{

  public myForm: FormGroup;
  experiment: Experiment = new Experiment();

  constructor(private router: Router, private experimentService: ExperimentService, private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            ingredients: this._fb.array([
                this.initIngredient(),
            ]),
            specification: ['']
        });
    }
  initIngredient() {
        return this._fb.group({
            name: ['', Validators.required],
            sample: [''],
            condition: ['']
        });
    }

addIngredient() {
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(this.initIngredient());
}

removeIngredient(i: number) {
    console.log("removing ingredient");
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.removeAt(i);
}

  save(model: FormGroup) {
    console.log("saving experiment");
    console.log(model.value);
    this.experiment.user = JSON.parse(localStorage.getItem('currentUser'));
    this.experiment.name = model.value.name;
    this.experiment.specification = model.value.specification;
    this.experiment.ingredients = model.value.ingredients;
    this.experimentService.createExperiment(this.experiment)
        .subscribe( data => {
          alert("Experiment created successfully.");
          window.location.reload();
        });

  };

}
