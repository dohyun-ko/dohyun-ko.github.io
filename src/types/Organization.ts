import Project from "./Project";

interface Organization {
  name: string;
  color?: string;
  url: string;
  job: string;
  startedAt: string;
  endedAt?: string;
  projects: Project[];
}

export default Organization;
