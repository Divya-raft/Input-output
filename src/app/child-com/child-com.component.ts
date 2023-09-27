import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent {
    @Input() name='';
}
