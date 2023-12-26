import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
    selector: 'app-component1',
    standalone: true,
    templateUrl: './component1.component.html',
    styleUrl: './component1.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class Component1Component {

}
