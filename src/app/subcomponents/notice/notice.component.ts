import { Component , OnInit } from '@angular/core';
import { NoticeService } from './notice.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent implements OnInit{
  notes: any[] = [];

  constructor(private noticeService: NoticeService) {}

  ngOnInit(): void {
    this.fetchNotices();
  }

  /*fetchNotices(): void {
    this.noticeService.getNotices().subscribe(
      (response) => {
        this.notices = response; 
        console.log('Notices retrieved successfully:', this.notices);
      },
      (error) => {
        console.error('Error retrieving notices:', error);
      }
    );
  } */
  fetchNotices(): void {
    this.noticeService.getNotices().subscribe(
      (response) => {
        this.notes = response;
        console.log('Notices retrieved successfully:', this.notes);
      },
      (error) => {
        console.error('Error retrieving notices:', error);
      }
    );
  }

}
