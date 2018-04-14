import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Experiment } from '../models/experiment.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExperimentService {

  constructor(private http:HttpClient) {}

  private Url = 'http://localhost:8080/experimentApi';


  public createExperiment(experiment) {
    return this.http.post<Experiment>(this.Url, experiment);
  }

  public getUserExperiments(user) {
    let params = new HttpParams().set('user', user);

        return this.http.get<any>(this.Url, {params});
  }

  public getIngredientTypes() {

        return this.http.get<any>(this.Url + '/ingredientTypes');
  }
}
