import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getNotices(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/nlearn/getnotices`);
  }
}