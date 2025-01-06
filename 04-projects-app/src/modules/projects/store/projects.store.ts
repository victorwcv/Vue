import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../types/project.interface';
import { useLocalStorage } from '@vueuse/core';


export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

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
