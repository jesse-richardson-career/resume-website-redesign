import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  job: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getJob();
  }

  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJob(id).subscribe(job => this.job = job);
  }

  goBack(): void {
    console.log("back");
    this.location.back();
  }
}
