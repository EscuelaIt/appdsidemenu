import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  twitter = 'nicobytes';
  showTwitter = true;
  nuevaTarea = '';

  tasks: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.showTwitter = true;
  }

  hide() {
    this.showTwitter = false;
  }

  toggle() {
    this.showTwitter = !this.showTwitter;
  }

  addTask() {
    this.tasks.push(this.nuevaTarea);
    this.nuevaTarea = '';
  }

}
