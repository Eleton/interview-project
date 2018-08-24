import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // apiet levererar en lista med våra ar projekt
  // genom webpack dev servers proxy så får vi in dem på samma host och slipper på så sätt cross origin problem
  // start appen och titta här för att se feeded: http://localhost:4200/app-api/v2/projects
  apiUrl = '/app-api/v2/projects';

  constructor(private http: HttpClient) {
    this.getProjects = this.getProjects.bind(this);
  }

  getProjects(): Observable<Project[]> {
    // @todo Hämta alla project och filtrera ut visible: false
    return this.http.get<Project[]>(this.apiUrl)
  }

}
