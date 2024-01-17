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

    // Add each file along with its relative path within the folder
    Array.from(folder).forEach(file => {
      const relativePath = file.webkitRelativePath || '';
      console.log('relative path is ',relativePath)
      formData.append('files', file, relativePath);
    });

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<string>(this.apiUrl + 'upload', formData, { headers });
  }

  getFolder(): Observable<string> {
    return this.http.get<string>(this.apiUrl + 'getFolder');
  }

  // In your client-side TypeScript code (node.service.ts)
  downloadFile(fileName: string): Observable<any> {
    const url = `${this.baseUrl}/${fileName}`;
    return this.http.get(url, { observe: 'response', responseType: 'blob' });
  }



}
