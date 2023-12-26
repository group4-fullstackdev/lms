import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

import { RouterOutlet , Routes, RouterModule , RouterLinkActive , RouterLink} from '@angular/router';
@Component({
    selector: 'app-component1',
    standalone: true,
    templateUrl: './component1.component.html',
    styleUrl: './component1.component.scss',
    imports: [HeaderComponent, FooterComponent , RouterModule , RouterLink , RouterLinkActive]
})
export class Component1Component {

}
