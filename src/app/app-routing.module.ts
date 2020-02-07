import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillsComponent } from './skills/skills.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { AboutComponent } from './about/about.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';

const routes: Routes = [
  { path: 'skills',  component: SkillsComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs',   component: JobsComponent},
  { path: 'jobs/:id',component: JobDetailComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'style',  component: StyleGuideComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
