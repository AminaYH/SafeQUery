import { Injectable } from '@angular/core';
import {TreeNode} from "../app/interfaces/node";
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NodeService {


  private apiUrl = 'http://localhost:8080/upload'; // Update with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }

}
