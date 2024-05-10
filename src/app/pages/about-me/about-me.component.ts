import {Component} from '@angular/core';
import {TooltipModule} from "primeng/tooltip";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'lp-about-me',
  standalone: true,
  imports: [
    TooltipModule,
    ButtonModule,
    ImageModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  age: string = '' + (new Date().getFullYear() - 1992);
}
