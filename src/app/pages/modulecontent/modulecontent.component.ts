import { Component , OnInit } from '@angular/core';
import { ModuleContentService } from './modulecontent.service';
import { NgFor , CommonModule } from '@angular/common';

@Component({
  selector: 'app-modulecontent',
  standalone: true,
  imports: [NgFor , CommonModule],
  templateUrl: './modulecontent.component.html',
  styleUrl: './modulecontent.component.scss'
})
export class ModulecontentComponent implements OnInit{
  moduleContent: any[] = [];

  constructor(private moduleContentService: ModuleContentService) {}

  ngOnInit(): void {
    this.fetchModuleContent();
  }

  fetchModuleContent() {
    this.moduleContentService.getModuleContent().subscribe(
      response => {
        this.moduleContent = response.moduleContent;
        console.log('Module content retrieved successfully:');
      },
      error => {
        console.error('Error retrieving module content:', error);
      }
    );
  }

  getCardClass(contentType: string): string {
    switch (contentType) {
      case 'lecnote':
        return 'cardmod c1';
      case 'labsheet':
        return 'cardmod c2';
      case 'assignment':
        return 'cardmod c3';
      default:
        return 'cardmod';
    }
  }

  getCardContentTitle(contentType: string): string {
    switch (contentType) {
      case 'lecnote':
        return 'Lecture Notes';
      case 'labsheet':
        return 'Lab Materials';
      case 'assignment':
        return 'Assignments';
      default:
        return 'Submissions';
    }
  }

}
