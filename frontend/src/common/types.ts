export interface Technology {
  id: number;
  name: string;
  color: string;
}

export interface User {
  id: number;
  name: string;
  age: number;
  about: string;
  gitHubUsername: string;
  stack: Technology[];
}
