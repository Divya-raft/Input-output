import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent {
    @Input() nameMy='';
    @Output() newName  = new EventEmitter<string>();

    addName(value:string)
    {
      this.newName.emit(value);
    }

}
