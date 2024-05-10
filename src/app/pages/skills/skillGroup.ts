export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Skill {
  image?: string;
  icon?: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
}
