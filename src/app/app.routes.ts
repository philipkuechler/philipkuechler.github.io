import { Routes } from '@angular/router';
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {AchievementsComponent} from "./pages/achievements/achievements.component";
import {CertificatesComponent} from "./pages/certificates/certificates.component";
import {ExperienceComponent} from "./pages/experience/experience.component";
import {SkillsComponent} from "./pages/skills/skills.component";

export const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'certificates', component: CertificatesComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '**', redirectTo: '/about-me'},
  {path: '', redirectTo: '/about-me', pathMatch: "full"},
];
