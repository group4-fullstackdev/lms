
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmissionsStaffService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getStudentSubmissions(modID: string, subtitle: string): Observable<any> {
    const url = `${this.apiUrl}/api/nlearn/studentsubmissions/${modID}/${subtitle}`;
    return this.http.get(url);
  }
}
