<template>
  <!-- Right: Register Form -->
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4">Sign up</h1>
    <form action="#" method="POST">
      <!-- Username Input -->
      <div class="mb-4">
        <label for="username" class="block text-gray-600">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-victor-500"
          autocomplete="off"
        />
      </div>

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

      <!-- Sign up Button -->
      <button
        type="submit"
        class="bg-victor-500 hover:bg-victor-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Sign up
      </button>
    </form>

    <!-- Login  Link -->
    <div class="mt-6 text-victor-500 text-center">
      <RouterLink to="login" class="hover:underline">Login Here</RouterLink>
    </div>
  </div>
</template>
