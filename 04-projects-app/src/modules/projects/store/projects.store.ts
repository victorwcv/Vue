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

  const addTask = (name: string, projectId: string) => {
    if (name.trim() === '' || !projectId) return;

    const project = projects.value.find((p) => p.id === projectId);

    if (!project) return;
    project.tasks.push({
      id: crypto.randomUUID(),
      name,
      completedAt: null,
    });
  };

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);

    if (!project) return;
    const task = project.tasks.find((t) => t.id === taskId);

    if (!task) return;
    const date = new Date();
    task.completedAt = task.completedAt ? null : date;
  };

  return {
    // properties

    // getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const taskCompleted = project.tasks.filter((t) => t.completedAt !== null).length;
        const completion =
          taskCompleted === 0 ? 0 : Math.floor((taskCompleted / project.tasks.length) * 100);
        return {
          ...project,
          completion,
        };
      });
    }),

    // actions
    addProject,
    addTask,
    toggleTask,
  };
});
