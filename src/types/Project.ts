interface Project {
  name: string;
  url?: string;
  startedAt: Date;
  endedAt?: Date;
  description: string;
  whatIDid: string[];
  techStacks: string[];
}

export default Project;
