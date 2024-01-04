import { Component , OnInit} from '@angular/core';
import { DisclistService } from './disclist.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-disclist',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './disclist.component.html',
  styleUrl: './disclist.component.scss'
})
export class DisclistComponent implements OnInit {
  discussionList: any[] = [];

  constructor(private disclistService: DisclistService) {}

  ngOnInit(): void {
    this.fetchDiscussionList();
  }

  fetchDiscussionList(): void {
    this.disclistService.getDiscussionList().subscribe(
      (response: any) => {
        this.discussionList = response.disc;
        console.log('Discussion list retrieved successfully:', this.discussionList);
      },
      (error) => {
        console.error('Error retrieving discussion list:', error);
      }
    );
  }

}
