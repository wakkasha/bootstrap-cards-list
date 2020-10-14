import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  somethings:any[]= [];

  constructor(){
    this.somethings = [{
      text: "Test 1",
      body: "This is the body 1"
    },
    {
      text: "Test 2",
      body: "This is the body 2"
    },
    {
      text: "Test 3",
      body: "This is the body 3"
    },
    {
      text: "Test 4",
      body: "This is the body 4"
    },
    {
      text: "Test 5",
      body: "This is the body 5"
    },
    {
      text: "Test 6",
      body: "This is the body 6"
    },

    {
      text: "Test 7",
      body: "This is the body 7"
    },
    {
      text: "Test 8",
      body: "This is the body 8"
    },
    {
      text: "Test 9",
      body: "This is the body 9"
    },
    {
      text: "Test 10",
      body: "This is the body 10"
    },


  ];
  }
}
