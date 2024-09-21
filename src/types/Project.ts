interface Project {
  name: string;
  isImportant: boolean;
  url?: string;
  startedAt: string;
  endedAt?: string;
  description?: string;
  whatIDid?: string[];
  techStacks?: string[];
}

export default Project;
