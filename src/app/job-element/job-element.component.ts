import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { openings } from '../business-models/openings.model';

@Component({
  selector: 'app-job-element',
  templateUrl: './job-element.component.html',
  styleUrls: ['./job-element.component.css']
})
export class JobElementComponent implements OnInit {

  @Input('opening') opening: openings;
  constructor() { console.log('constructor'); }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }
}
