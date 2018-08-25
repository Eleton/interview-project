import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProjectService } from '../../domain/project.service';

import { Observable } from 'rxjs';
import { Project } from '../../domain/project.model';

@Component({
  selector: 'wec-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {

  // TODO hämta projekten från services så att vyn kan visa dem, använt *ngFor och async pipen

  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    let ps = this.projectService.getProjects();
    this.projects = ps;
  }

}
