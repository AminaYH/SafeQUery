import { Injectable } from '@angular/core';
import {TreeNode} from "../app/interfaces/node";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NodeService {


  private apiUrl = 'http://localhost:8080/api/'; // Update with your Spring Boot backend URL
  private baseUrl = 'http://localhost:8080/api/download';

  constructor(private http: HttpClient) {}

  uploadFolder(folder: FileList): Observable<string> {
    const formData = new FormData();

    // Check if folder is defined and iterable
    if (folder && folder.length > 0) {
      Array.from(folder).forEach(file => {
        const relativePath = file.webkitRelativePath || '';
        console.log('relative path is ', relativePath);
        formData.append('file', file, relativePath);
      });
    }

    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

    return this.http.post<string>(this.apiUrl + 'upload', formData, { headers }).pipe(
      catchError(this.handleError)
    );
  }


  getFolder(): Observable<string> {
    return this.http.get<string>(this.apiUrl + 'getFolder');
  }

  downloadFile(fileName: string): Observable<any> {
    const url = `${this.baseUrl}/${fileName}`;
    return this.http.get(url, { observe: 'response', responseType: 'blob' });
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}
