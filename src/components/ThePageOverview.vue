<template>
  <div class="bg-gray-100">
    <div
      class="flex min-h-screen items-center justify-center min-h-screen px-24"
    >
      <div>
        <div class="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
          <h2
            class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug !mb-2 text-primary"
          >
            粉絲專頁
          </h2>
        </div>
        <p
          class="block antialiased font-sans text-base font-light leading-relaxed text-inherit !mb-4 !font-normal !text-gray-600"
        >
          請選擇你要使用的粉絲專頁
        </p>
        <div class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div
            class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-800 hover:bg-opacity-25 bg-blue-500"
            v-for="page in pageListStore.pages"
            :key="page.id"
            @click="() => selectPage(page.id, page['access_token'])"
          >
            <span class="my-6 grid h-24 w-24 place-items-center text-white">
              {{ page.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePageListStore } from "../stores/PageListStore";
const pageListStore = usePageListStore();

import { usePostListStore } from "../stores/PostListStore";
const postListStore = usePostListStore();

import { useStepStore } from "../stores/StepStore";
const stepStore = useStepStore();

import { useAuthorityStore } from "../stores/AuthorityStore";
const authorityStore = useAuthorityStore();

import { useGetPostsApi } from "../comosables/GetPostsApi";
import { useGetCommentsApi } from "../comosables/GetCommentsApi";

import { useGetHashTage } from "../comosables/GetHashTage";

async function selectPage(id, accessToken) {
  //====== 3.  取得posts===================== /
  const postsList = await useGetPostsApi(id, accessToken);
  //====== 4.  取得每個post的comment-=====================
  for (const i in postsList) {
    const comments = await useGetCommentsApi(postsList[i].id, accessToken);
    postsList[i].comments = comments;
  }
  //====== 5.  每個post取出hashtage，當成屬性=====================
  postsList.forEach((post, index) => {
    postsList[index].hastage = useGetHashTage(post.message);
  });
  postListStore.getPost(postsList);
  stepStore.nextStep();
}
</script>

<style scoped></style>
