import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { navbarComponent } from './navbar/navbar.component';
import { footerComponent } from './footer/footer.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobElementComponent } from './job-element/job-element.component';
import { PostJobComponent } from './post-job/post-job.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobListingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    footerComponent,
    JobListingComponent,
    JobElementComponent,
    PostJobComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
