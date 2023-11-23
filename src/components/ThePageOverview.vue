<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
    <div class="max-w-xl mx-auto text-center">
      <div class="inline-flex px-4 py-1.5 mx-auto rounded-full">
        <p class="text-4xl font-semibold tracking-widest text-g uppercase">
          粉絲專頁
        </p>
      </div>
      <p
        class="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white"
      >
        請選擇你要使用的粉絲專頁
      </p>
    </div>
    <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
      <div
        v-for="page in pageListStore.pages"
        class="transition-all duration-1000 bg-white hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-40 group"
      >
        <div
          class="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
        ></div>
        <div class="py-2 px-9 relative">
          <h3
            class="mt-8 text-lg font-semibold text-black group-hover:text-white"
          >
            粉專名稱:{{ page.name }}
          </h3>
          <p class="mt-4 text-base text-gray-600 group-hover:text-white">
            粉專Id: {{ page.id }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePageListStore } from "../stores/PageListStore";
const pageListStore = usePageListStore();
</script>

<style scoped></style>
