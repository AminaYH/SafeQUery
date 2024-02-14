import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class VulnerabilitiesService {


  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  checkForSQLInjection(): Observable<string> {
    return this.http.get(this.apiUrl + 'check-sql-injection', { responseType: 'text' });
  }



}
