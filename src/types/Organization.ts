import Project from "./Project";

interface Organization {
  name: string;
  color?: string;
  url: string;
  job: string;
  startedAt: Date;
  endedAt?: Date;
  projects: Project[];
}

export default Organization;
