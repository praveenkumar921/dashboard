import { DashboardService } from './../dashboard.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public dashboardList = [];

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardData();
  }

  public getDashboardData() {
    this.dashboardService.getDashboardData().subscribe((data: []) => {
      this.dashboardList = data;
    },
      (err) => {
        console.log('err', err);
      });
  }

  public getItem(item: any) {
    this.dashboardService.getMeetingDataById(item.id).subscribe((data: any) => {
      this.dashboardService.dashboardSubject.next(data);
    },
      (err) => {
        console.log('err', err);
      });
  }
}
