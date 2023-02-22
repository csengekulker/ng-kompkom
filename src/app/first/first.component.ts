import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private emitter: EmitterService) { }

  ngOnInit(): void { 
    this.emitter.event.subscribe(() => {
      this.firstMethod()
    })
  }

  firstMethod() {
    alert("Ez az elsőből jön!")
  }

}
