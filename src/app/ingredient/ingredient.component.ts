import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExperimentService } from '../services/index';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredientList: String[] = [];
  constructor(private experimentService: ExperimentService) { }

  @Input('group')
  public ingredientForm: FormGroup;

  ngOnInit() {
    const httpGet$ = this.experimentService.getIngredientTypes().subscribe(
      data => {
        console.log(data);
          this.ingredientList = this.ingredientList.concat(data);

      },
      error => {

      });


    console.log(this.ingredientList);
  }


}
