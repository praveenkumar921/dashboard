import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public httpClient: HttpClient) { }

  public dashboardSubject = new Subject();

  public getDashboardData() {
    const URL = 'https://jsonplaceholder.typicode.com/todos/';
    return this.httpClient.get(URL);

  }

  public getMeetingDataById(id: any) {
    const URL = 'https://jsonplaceholder.typicode.com/todos/' + id;
    return this.httpClient.get(URL);

  }

}
