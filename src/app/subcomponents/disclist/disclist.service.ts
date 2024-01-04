import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DisclistService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getDiscussionList() {
    const url = `${this.baseUrl}/api/nlearn/getdisclist`; 
    return this.http.get(url);
  }
}
