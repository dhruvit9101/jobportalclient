import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

import { openings } from '../business-models/openings.model';
import { openingServices } from '../services/opening.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
  providers: [openingServices]
})
export class JobListingComponent implements OnInit, OnDestroy {

  lstOpenings: openings[] = [];
  jobTitleSearchText: string = "";
  locationSearchText: string = "";
  paramSubscribe: Subscription;

  constructor(private openningService: openingServices, private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {

    this.paramSubscribe = this.activatedRoute.queryParams.subscribe(params => {
      this.jobTitleSearchText = params['jobTitle'];
      this.locationSearchText = params['location'];
    });

    //this.lstOpenings = this.openningService.jobOpenings;
    this.openningService.getJobs();
    this.lstOpenings = this.openningService.jobOpenings;

    if (this.jobTitleSearchText != undefined && this.jobTitleSearchText != '') {
      this.lstOpenings = this.lstOpenings.filter(
        openings => openings.title.trim().toLowerCase().includes(this.jobTitleSearchText.trim().toLowerCase()));
    }
    if (this.locationSearchText != undefined && this.locationSearchText != '') {
      this.lstOpenings = this.lstOpenings.filter(
        openings => openings.location.trim().toLowerCase().includes(this.locationSearchText.trim().toLowerCase()));
    }
  }

  addJob(jobData: openings) {
    this.openningService.addJob(jobData);
  }

  search() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/jobs'], { queryParams: { jobTitle: this.jobTitleSearchText.trim(), location: this.locationSearchText } })
  }

  clearSearch() {
    this.locationSearchText = "";
    this.jobTitleSearchText = "";
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/jobs']);
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }
}
