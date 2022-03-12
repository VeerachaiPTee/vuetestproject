<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const showMobileMenu = ref(false);
</script>

<template>
  <header>
    <nav>
      <!-- desktopmenu -->
      <div class="bg-gradient-to-r from-pink-500 to-violet-500">
        <div class="max-w-7xl max-auto">
          <div class="flex justify-between">
            <!-- menu -->
            <div class="flex space-x-4">
              <!-- logo -->
              <div class="flex items-center py-5 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  /></svg
                ><RouterLink to="/"
                  ><span class="text-2xl font-extrabold text-white ml-3"
                    >My shop</span
                  ></RouterLink
                >
              </div>
              <!-- menu -->
              <div class="hidden md:flex items-center space-x-1">
                <RouterLink
                  to="/"
                  class="py-5 px-2 text-white hover:text-cyan-200"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/"
                  class="py-5 px-2 text-white hover:text-cyan-200"
                  >About</RouterLink
                >
                <RouterLink
                  to="/"
                  class="py-5 px-2 text-white hover:text-cyan-200"
                  >Contact</RouterLink
                >
              </div>
            </div>
            <!-- login -->
            <div class="flex items-center space-x-1">
              <div class="flex justify-center items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <RouterLink
                  to="/login"
                  class="py-5 px-2 text-white hover:text-cyan-200 rounded-lg cursor-pointer"
                  >Login
                </RouterLink>
              </div>
              <div class="flex justify-center items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <RouterLink
                  to="/register"
                  class="py-5 px-2 text-white hover:text-cyan-200"
                  >Register</RouterLink
                >
              </div>
            </div>
            <!-- button show mobile menu -->
            <div class="md:hidden">
              <button
                class="py-5 px-2 text-white hover:text-cyan-200"
                @click="showMobileMenu = !showMobileMenu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- mobile menu -->
        <div
          class="md:hidden bg-gradient-to-r from-pink-500 to-violet-500"
          v-show="showMobileMenu"
        >
          <RouterLink
            to="/"
            class="block py-2 px-4 hover:bg-gradient-to-l from-pink-500 to-violet-500 hover:text-white"
            >Store</RouterLink
          >
          <RouterLink
            to="/"
            class="block py-2 px-4 hover:bg-gradient-to-l from-pink-500 to-violet-500 hover:text-white"
            >About</RouterLink
          >
          <RouterLink
            to="/"
            class="block py-2 px-4 hover:bg-gradient-to-l from-pink-500 to-violet-500 hover:text-white"
            >Contact</RouterLink
          >
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style></style>
