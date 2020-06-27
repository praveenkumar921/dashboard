import { DashboardService } from './../dashboard.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public dashboardData: any = undefined;

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.dashboardSubject.subscribe((data: any) => {
      this.dashboardData = data;
    });
  }

}

