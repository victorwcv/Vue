<template>
  <h1 class="text-2xl font-semibold mb-4">Register</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Name</label>
      <input
        v-model="registerForm.fullName"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Email</label>
      <input
        v-model="registerForm.email"
        type="email"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        v-model="registerForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Register
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Login Here</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';
import { useAuthStore } from '../stores/auth.store';

const authStore = useAuthStore();
const toast = useToast();

const registerForm = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (registerForm.fullName.trim() === '') {
    return;
  }
  if (registerForm.email.trim() === '') {
    return;
  }
  if (registerForm.password.length < 6) {
    return;
  }

  const ok = await authStore.register(
    registerForm.fullName,
    registerForm.email,
    registerForm.password,
  );

  if (ok) {
    toast.success('User created successfully');
    registerForm.fullName = '';
    registerForm.email = '';
    registerForm.password = '';
    return;
  }
  toast.error('Something went wrong');
};
</script>
