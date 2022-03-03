import { Component, OnInit } from '@angular/core';

interface Language {
  language: string;
  experience: string;
};

interface Job {
  company: string;
  position: string;
  duration: string;
  summary: string;
  link: string;
};

interface Certificate {
  name: string;
  institution: string;
  completed: string;
};

const LANGUAGE_DATA: Language[] = [
  { language: 'Typescript', experience: 'Intermediate' },
  { language: 'Angular', experience: 'Intermediate' },
  { language: 'HTML', experience: 'Intermediate' },
  { language: 'SCSS', experience: 'Intermediate' },
  { language: 'CSS', experience: 'Intermediate' },
  { language: 'Javascript', experience: 'Intermediate' },
  { language: 'C#', experience: 'Beginner' },
  { language: 'JQuery', experience: 'Beginner' },
  { language: 'React', experience: 'Beginner' },
];

const JOB_DATA: Job[] = [
  {
    company: 'Assertiv', 
    position: 'Front-end Developer',
    duration: 'Jan 20 - May 21',
    summary: 'Creators of SSO security software.',
    link: 'https://www.assertiv.com/'
  },
  {
    company: 'Biscit', 
    position: 'Front-end Developer',
    duration: 'Sep 21 - Present',
    summary: 'Provide ERP solution software and integrations',
    link: 'https://www.biscit.com/'
  },
];

const CERTIFICATE_DATA: Certificate[] = [
  {
    name: "Beginner's guide to C#", 
    institution: 'LinkedIn Learning',
    completed: 'Dec 21'
  },
  {
    name: 'Node.js: Design Patterns', 
    institution: 'LinkedIn Learning',
    completed: 'Dec 21'
  },
  {
    name: 'Object Oriented Programming with C#', 
    institution: 'LinkedIn Learning',
    completed: 'Dec 21'
  },
  {
    name: 'React Front to Back', 
    institution: 'Udemy',
    completed: 'Sep 21',
  },
  {
    name: 'Materialize CSS From Scratch With 5 Projects', 
    institution: 'Udemy',
    completed: 'Jul 21',
  },
  {
    name: 'Node.js API Masterclass with Express & MongoDB', 
    institution: 'Udemy',
    completed: 'May 21',
  },
  {
    name: 'Angular Front to Back', 
    institution: 'Udemy',
    completed: 'Apr 21',
  },
  {
    name: 'Modern JavaScript from the Beginning', 
    institution: 'Udemy',
    completed: 'Nov 19',
  },
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  languages = LANGUAGE_DATA;
  jobs = JOB_DATA;
  certificates = CERTIFICATE_DATA;
  displayedColumns: string[] = ['language', 'experience'];

  constructor() { }

  ngOnInit(): void {
  }

}
