import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Make this service globally available
})
export class BackendService {
  private apiUrl = 'http://localhost:5001/api'; // Replace with your backend URL

  constructor(private http: HttpClient) {
    console.log('HttpClient injected successfully');
  }
  

  getTestMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }
}
