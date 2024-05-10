import {Component, Input} from '@angular/core';
import {Experience} from "../experience";

@Component({
  selector: 'lp-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss'
})
export class ExperienceItemComponent {
  @Input() experience: Experience = {job: '', company: '', resumeDate: '', description: ''};
}
