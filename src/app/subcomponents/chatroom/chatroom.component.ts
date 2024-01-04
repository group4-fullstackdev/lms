import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../pages/login/login.service';
import { ChatroomService } from './chatroom.service';
import { NgFor, NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [FormsModule , NgClass, NgFor, CommonModule],
  providers: [LoginService , ChatroomService],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.scss'
})
export class ChatroomComponent implements OnInit {
  postData = {
    text: ''
  };

  chats: any[] = [];

  constructor(private http: HttpClient, private chatroomService: ChatroomService , public loginService: LoginService, ) {}

  ngOnInit(): void {
    this.fetchChats();
  }

  fetchChats(): void {
    this.chatroomService.getChatDisc().subscribe(
      (response: any) => {
        this.chats = response.chats; 
        console.log('Chats retrieved successfully:', this.chats);
      },
      (error) => {
        console.error('Error retrieving chats:', error);
      }
    );
  }

  submitForm() {
    // Send form data to the backend
    this.http.post('http://localhost:3000/api/nlearn/addchats', this.postData)
      .subscribe(response => {
        console.log('Data sent successfully:', response);
        
      });
  }

  chatdelete(chatID: string): void {
    this.chatroomService.chatdelete(chatID).subscribe(
      (response) => {
        console.log('Chat deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting chat:', error);
      }
    );
  }

  toggleEdit(chat: any): void {
    chat.editing = !chat.editing;
    if (chat.editing) {
      chat.editedMessage = chat.chat; 
    }
  }

  saveEdit(chat: any): void {
    // Send edited message to the backend
    this.chatroomService.editChat(chat.id, chat.editedMessage).subscribe(
      (response) => {
        console.log('Chat edited successfully:', response);
        chat.chat = chat.editedMessage;
        chat.editing = false;
      },
      (error) => {
        console.error('Error editing chat:', error);
      }
    );
  }
  


}
