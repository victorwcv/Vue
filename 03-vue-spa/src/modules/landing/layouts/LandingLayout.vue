<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header
      class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8"
    >
      <a class="font-semibold" href="#">
        <img alt="Victor logo" class="w-10 h-10 object-contain" src="@/assets/logo.png" />
      </a>

      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/features"> Features </RouterLink>
        <RouterLink to="/pricing"> Pricing </RouterLink>
        <RouterLink to="/contact"> Contact </RouterLink>
        <RouterLink to="/pokemon/1"> Pokemons </RouterLink>
        <RouterLink
          to="/auth"
          class="bg-red-500 text-white px-4 py-1 rounded-full text-ellipsis text-nowrap"
          >Log out</RouterLink
        >
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <RouterView />
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer
      class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8"
    >
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
