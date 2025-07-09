import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';

@Component({
  selector: 'app-root',
  imports: [CoursesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-learning-linkedin';
}
