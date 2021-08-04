import { Component, OnInit, SkipSelf } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.css'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🏵️' } }]
})
export class SkipSelfComponent implements OnInit {

  constructor(@SkipSelf() public flower: FlowerService) { }

  ngOnInit(): void {
  }

}
