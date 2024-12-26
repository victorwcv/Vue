<template>
  <!-- component -->
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="@/assets/develop-ilustration.svg"
        alt="Placeholder Image"
        class="object-contain w-full h-full"
      />
    </div>
    <!-- Form -->
    <RouterView />
  </div>
</template>
