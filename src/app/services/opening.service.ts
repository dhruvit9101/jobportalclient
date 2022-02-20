
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { openings } from '../business-models/openings.model';

@Injectable()
export class openingServices {

    constructor(private http: HttpClient) { }

    // jobOpenings: openings[] = [
    //     new openings('Senior Angular Application Developer', '#1345634', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Long Description', 'Pune, Banglore,Noida'),
    //     new openings('Application Development Specialist - .NET', '#13089934', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Long Description', 'Pune'),
    //     new openings('Application Development Specialist - Java', '#13089989', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Long Description', 'Pune'),
    //     new openings('Lead Angular Application Developer', '#1345634', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Long Description', 'Pune,Banglore'),
    //     new openings('Lead - .NET Core', '#13089934', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Long Description', 'Banglore'),
    //     new openings('Application Development Manager - Java', '#13089989', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Long Description', 'Banglore')
    // ];
    jobOpenings: any;

    getJobs() {
        this.http.get('https://localhost:5001/api/jobs').subscribe(response => {
            this.jobOpenings = response;
        }, error => {
            console.log(error);
        });
    }

    addJob(jobData: openings) {
        this.jobOpenings.push({
            title: jobData.title,
            refNumber: jobData.refNumber,
            shortDesscription: jobData.shortDesscription,
            longDesscription: null,
            location: jobData.location
        });
    }
}