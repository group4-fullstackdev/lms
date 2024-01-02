import { Component , OnInit } from '@angular/core';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';
import { DashboardService } from './maindashboardprops.service';
import { NgFor , CommonModule } from '@angular/common';


@Component({
  selector: 'app-maindashboardprops',
  standalone: true,
  imports: [ RouterLink , RouterLinkActive , RouterModule , NgFor],
  templateUrl: './maindashboardprops.component.html',
  styleUrl: './maindashboardprops.component.scss'
})
export class MaindashboardpropsComponent implements OnInit {
  moduleNames: string[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardContent();
  }

  loadDashboardContent(): void {
    this.dashboardService.getDashboardContent().subscribe(
      response => {
        this.moduleNames = response.moduleNames;
      },
      error => {
        console.error(error);
      }
    );
  }

}
