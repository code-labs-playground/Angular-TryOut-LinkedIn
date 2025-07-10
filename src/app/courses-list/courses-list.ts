import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [CommonModule],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList {
  title = 'Available Courses';

  courses = [
    { id: 1, title: 'Angular Basics', description: 'Learn the basics of Angular framework', price: 150, duration: '4 weeks', soldOut: false, img: 'angular-icon.png' },
    { id: 2, title: 'React Fundamentals', description: 'Understand the core concepts of React', price: 120, duration: '5 weeks', soldOut: true, img: 'react-icon.png' },
    { id: 3, title: 'Vue.js Essentials', description: 'Get started with Vue.js', price: 40, duration: '3 weeks', soldOut: true, img: 'vue-icon.png' },
    { id: 4, title: 'Node.js Introduction', description: 'Learn about server-side development with Node.js', price: 110, duration: '6 weeks', soldOut: false, img: 'node-icon.png' }
  ];

  viewDetails(course: any) {
    console.log(`Viewing details for course: ${course.title}`);
    // Here you can implement the logic to navigate to the course details page
  }

  ngOnInit() {
    // This method is called when the component is initialized
    console.log('CoursesList component initialized');
  }
}
