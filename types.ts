
export enum Page {
  Home = 'Home',
  About = 'About',
  Workflow = 'Workflow',
  Outcomes = 'Outcomes',
  Extensions = 'Extensions',
}

export interface NavItem {
  name: string;
  page: Page;
}