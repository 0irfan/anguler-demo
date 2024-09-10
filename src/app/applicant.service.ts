import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {


  constructor(private http: HttpClient) {}

  parseResume(formData: FormData): Observable<any> {
    return this.http.post<any>("https://www.test.dc3worx.ca/parse/", formData);
  }


}


