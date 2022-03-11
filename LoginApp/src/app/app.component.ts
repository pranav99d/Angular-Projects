import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginApp !';
  months = ["January", "Feburary", "March", "April","May","June","July","August","September","October","November","December"];

  myClickFunction(click) {
     alert("Welcome");
     console.log(event);
  }
}
