import { Component, Input } from '@angular/core';

@Component({
  selector: 'im-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {


  @Input() resourceImage:string = "";

  constructor() { }

}
