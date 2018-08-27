import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../domain/project.model';

@Component({
  selector: 'wec-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
