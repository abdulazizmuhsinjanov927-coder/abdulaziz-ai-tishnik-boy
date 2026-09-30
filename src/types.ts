export interface InterestItem {
  id: string;
  title: string;
  iconName: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  skills: string[];
  gradient: string;
  glowColor: string;
}

export interface TimelineMilestone {
  step: string;
  title: string;
  period: string;
  description: string;
  keyLearnings: string[];
  highlight: string;
}

export interface FutureGoal {
  id: string;
  number: string;
  title: string;
  vision: string;
  actionPlan: string;
  timeframe: string;
  icon: string;
  category: string;
}
