import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleContentService {
  private apiUrl = 'http://localhost:3000/api/nlearn/modcontent/';

  constructor(private http: HttpClient) {}

  getModuleContent(modID: string): Observable<any> {
    const url = `${this.apiUrl}${modID}`;
    return this.http.get<any>(url);
  }
}

