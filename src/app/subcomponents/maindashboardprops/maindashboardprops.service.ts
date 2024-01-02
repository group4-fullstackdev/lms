import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class DashboardService {
    private apiUrl = 'http://localhost:3000/api/nlearn/dashboardcon'; 
  
    constructor(private http: HttpClient) { }
  
    getDashboardContent(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/api/nlearn/dashboardcon`);
    }
  }
  