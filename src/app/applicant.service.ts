import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {


  constructor(private http: HttpClient) {}

  parseResume(formData: FormData): Observable<any> {
    return this.http.post<any>("http://20.161.64.95/parse/", formData);
  }


}


