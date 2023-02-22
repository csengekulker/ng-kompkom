import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private emitter: EmitterService) { }

  ngOnInit(): void { }

  callFirstMethod() {
    this.emitter.onButtonClick()
  }

}
