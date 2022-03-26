enum COLORS {
  RED = "#f5365c",
  BLUE = "#5e72e4",
}

export interface Project {
  name: string;
  color: COLORS;
}

export const Projects: Project[] = [
  { name: "Backlog", color: COLORS.RED },
  { name: "Sprint 1", color: COLORS.BLUE },
];
