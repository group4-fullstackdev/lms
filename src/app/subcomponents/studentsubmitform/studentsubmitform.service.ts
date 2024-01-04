
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsubmitformService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getStudentSubmissions(): Observable<any> {
    const url = `${this.apiUrl}/api/nlearn/getsubstudent`;
    return this.http.get(url);
  }
}
