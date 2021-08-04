import { Component, OnInit, Optional, Self } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-self-no-data',
  templateUrl: './self-no-data.component.html',
  styleUrls: ['./self-no-data.component.css']
})
export class SelfNoDataComponent implements OnInit {

  constructor(@Self()  @Optional() public flower: FlowerService) { }

  ngOnInit(): void {
  }

}
