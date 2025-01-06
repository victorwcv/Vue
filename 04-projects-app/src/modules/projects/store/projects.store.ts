import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Project } from '../types/project.interface';

const initialState: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    tasks: [
      { id: 1, name: 'Task 1', completedAt: null },
      { id: 2, name: 'Task 2', completedAt: null },
    ],
  },
  {
    id: 2,
    name: 'Project 2',
    tasks: [
      { id: 3, name: 'Task 3', completedAt: null },
      { id: 4, name: 'Task 4', completedAt: null },
    ],
  },
];

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([...initialState]);

  return {
    projects,
  };
});
