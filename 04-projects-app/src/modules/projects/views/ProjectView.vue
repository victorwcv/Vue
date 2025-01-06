<template>
  <BreadCrums :name="project?.name ?? 'no Name'" />
</template>

<script setup lang="ts">
import BreadCrums from '@/modules/common/components/BreadCrums.vue';
import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../types/project.interface';
import { ref, watch } from 'vue';

interface Props {
  id: string;
}

const props = defineProps<Props>();

const projectsStore = useProjectsStore();

const project = ref<Project | null>();

watch(
  () => props.id,
  () => {
    project.value = projectsStore.projectList.find((project) => project.id === props.id);
  },
  {
    immediate: true,
  },
);
</script>

<style scoped></style>
