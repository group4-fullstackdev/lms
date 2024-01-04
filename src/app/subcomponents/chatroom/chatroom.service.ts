import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getChatDisc(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/nlearn/getchatdisc`);
  }

  chatdelete(chatID: string) {
    const url = `${this.apiUrl}/api/nlearn/deletedisc`; 
    return this.http.post(url, {chatID});
  }

  editChat(chatID: string, editedMessage: string): Observable<any> {
    const url = `${this.apiUrl}/api/nlearn/editdisc`;
    return this.http.put(url, { chatID, editedMessage });
  }
  
}
