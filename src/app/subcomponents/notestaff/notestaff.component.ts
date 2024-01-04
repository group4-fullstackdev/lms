import { Component , OnInit } from '@angular/core';
import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';
import { NotestaffService } from './notestaff.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-notestaff',
  standalone: true,
  imports: [ RouterLink , RouterModule , NgFor, CommonModule],
  templateUrl: './notestaff.component.html',
  styleUrl: './notestaff.component.scss'
})
export class NotestaffComponent implements OnInit{
  notes: any[] = [];

  constructor(private notestaffService: NotestaffService) {}

  ngOnInit(): void {
    this.fetchNotices();
  }

  fetchNotices(): void {
    this.notestaffService.getNotices().subscribe(
      (response) => {
        this.notes = response;
        console.log('Notices retrieved successfully:', this.notes);
      },
      (error) => {
        console.error('Error retrieving notices:', error);
      }
    );
  }

  dnote(noteId: string): void {
    this.notestaffService.dnote(noteId).subscribe(
      (response) => {
        console.log('Note deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting note:', error);
      }
    );

  }



}
