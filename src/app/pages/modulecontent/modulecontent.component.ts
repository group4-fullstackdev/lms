import { Component , OnInit } from '@angular/core';
import { ModuleContentService } from './modulecontent.service';
import { NgFor , CommonModule } from '@angular/common';
import { ActivatedRoute  , Router, RouterLink, RouterModule} from '@angular/router';
import { LoginService } from '../login/login.service';
import { StaffmodulecontentComponent } from '../../subcomponents/staffmodulecontent/staffmodulecontent.component';
@Component({
  selector: 'app-modulecontent',
  standalone: true,
  imports: [NgFor , CommonModule, RouterLink, RouterModule , StaffmodulecontentComponent],
  templateUrl: './modulecontent.component.html',
  styleUrl: './modulecontent.component.scss'
})
export class ModulecontentComponent implements OnInit{
  moduleContent: any[] = [];
  modID!: string;

  constructor(private moduleContentService: ModuleContentService , private route: ActivatedRoute , public loginService: LoginService) {
    
  }

  ngOnInit(): void {
    this.fetchModuleContent();

    this.route.paramMap.subscribe(params => {
      const modID = params.get('modID');
    
      if (modID !== null) {
        this.modID = modID;
        console.log('modID:', this.modID);
      }
    });
    

    
  }

  fetchModuleContent() {
    this.moduleContentService.getModuleContent(this.modID).subscribe(
      response => {
        this.moduleContent = response.moduleContent;
        console.log('Module content retrieved successfully:', this.moduleContent);
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
