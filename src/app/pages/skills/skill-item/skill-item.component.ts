import {Component, Input} from '@angular/core';
import {Skill} from "../skillGroup";
import {CardModule} from "primeng/card";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {ChipModule} from "primeng/chip";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'lp-skill-item',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    FormsModule,
    ChipModule
  ],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  @Input() skill!: Skill;
}
