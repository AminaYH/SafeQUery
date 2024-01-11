import { Injectable } from '@angular/core';
import {TreeNode} from "../app/interfaces/node";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NodeService {


  private apiUrl = 'http://localhost:8080/api/'; // Update with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  uploadFile(folder: FileList):Observable<string> {
    const formData = new FormData();

    Array.from(folder).forEach(file => {
      formData.append('files', file, file.name);
    });


    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<string>(this.apiUrl + 'upload', formData, { headers });  }
  getFolder(): Observable<string> {
    return this.http.get<string>(this.apiUrl + 'getFolder');
  }

}
