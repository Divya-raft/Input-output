import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input_output';
  nameMy = "Divya Palanivel";  //ParentComponent
  names =['Divya','Sreedhar','Dhanalakshmi'];
   
  addNewNames(nameFor:string)
  {
    this.names.push(nameFor);
  }
}
