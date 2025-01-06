import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../types/project.interface';

const initialState: Project[] = [
  {
    id: "1",
    name: 'Project 1',
    tasks: [
      { id: 1, name: 'Task 1', completedAt: null },
      { id: 2, name: 'Task 2', completedAt: null },
    ],
  },
  {
    id: "2",
    name: 'Project 2',
    tasks: [
      { id: 3, name: 'Task 3', completedAt: null },
      { id: 4, name: 'Task 4', completedAt: null },
    ],
  },
];

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([...initialState]);

  const addProject = (name: string) => {
    if (name.trim() === '') return;

    projects.value.push({
      id: crypto.randomUUID(),
      name,
      tasks: [],
    });
  };

  return {
    // properties

    // getters
    projectList: computed(() => [...projects.value]),

    // actions
    addProject,
  };
});
