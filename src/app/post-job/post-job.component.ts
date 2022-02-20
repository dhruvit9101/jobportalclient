import { Component, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { openings } from '../business-models/openings.model';
import { locations } from '../business-models/location.model';
import { locationService } from '../services/location.service';
import { openingServices } from '../services/opening.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
  providers: [locationService, openingServices]
})
export class PostJobComponent implements OnInit {

  opening = new openings();
  locations: locations[] = [];

  @Output() jobAdded = new EventEmitter<openings>();

  constructor(private locationService: locationService, private openingServices: openingServices) { }

  ngOnInit(): void {
    this.opening.location = "0";
    this.locations = this.locationService.fillLocation();
  }

  createJob() {
    this.jobAdded.emit(this.opening);
  }
}
