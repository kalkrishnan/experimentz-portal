import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Test } from '../models/test.model';
import { SearchCriteria } from '../models/searchcriteria.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TestService {

  constructor(private http: HttpClient) {}

  private Url = 'http://localhost:8080/testApi';


  public createTest(test) {
    console.log(test);
    return this.http.post<Test>(this.Url, test);
  }

  public getUserTests(user) {
    let params = new HttpParams().set('user', user);

        return this.http.get<any>(this.Url, {params});
  }

  public getTests(search) {
    console.log(search);
    console.log(search.constructor.name);
    let params = new HttpParams().set('searchCriteria', search);

        return this.http.post<any>(this.Url + '/tests', search);
  }

  public getMeasurementTypes() {

        return this.http.get<any>(this.Url + '/measurementTypes');
  }

  public getConditionTypes() {

    return this.http.get<any>(this.Url + '/conditionTypes');
  }

  public getUsers() {

    return this.http.get<any>(this.Url + '/users');
  }
}
