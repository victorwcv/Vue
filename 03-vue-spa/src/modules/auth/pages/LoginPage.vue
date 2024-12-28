<template>
  <!-- Right: Login Form -->
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4">Login</h1>
    <form action="#" method="POST">
      <!-- Email Input -->
      <div class="mb-4">
        <label for="email" class="block text-gray-600">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-victor-500"
          autocomplete="off"
        />
      </div>

      <!-- Password Input -->
      <div class="mb-4">
        <label for="password" class="block text-gray-600">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-victor-500"
          autocomplete="off"
        />
      </div>

      <!-- Remember Me Checkbox -->
      <div class="mb-4 flex items-center">
        <input type="checkbox" id="remember" name="remember" class="text-victor-500" />
        <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
      </div>

      <!-- Forgot Password Link -->
      <div class="mb-6 text-victor-500">
        <a href="#" class="hover:underline">Forgot Password?</a>
      </div>

      <!-- Login Button -->
      <button
        @click="onLogin"
        type="button"
        class="block text-center bg-victor-500 hover:bg-victor-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Login
      </button>
    </form>

    <!-- Sign up  Link -->
    <div class="mt-6 text-victor-500 text-center">
      <RouterLink to="register" class="hover:underline">Sign up Here</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onLogin = () => {
  localStorage.setItem('userID', 'ABC-123');

  const lastPath = localStorage.getItem('lastPath') ?? '/';

  router.replace(lastPath);
  console.log('click login');
};
</script>
