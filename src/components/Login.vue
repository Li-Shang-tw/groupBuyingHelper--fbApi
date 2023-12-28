<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto w-auto rounded" src="../assets/logo.png" alt="logo" />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        網購小幫手
      </h2>
    </div>

    <div class="mt-10 mx-auto w-full max-w-sm">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto w-full ease-in duration-300 hover:scale-105 hover:ring-1 hover:ring-blue-500 hover:ring-offset-1"
        @click="handleSubmit"
      >
        呼叫網購小幫手
      </button>
    </div>
  </div>
</template>

<script setup>
//import與使用useAuthorityStore
import { useAuthorityStore } from "../stores/AuthorityStore";
const authorityStore = useAuthorityStore();
import { useStepStore } from "../stores/StepStore";
const stepStore = useStepStore();
import { usePageListStore } from "../stores/PageListStore.js";
const pageListStore = usePageListStore();
//import composables
import { useLogIn } from "../comosables/logIn";
import { useGetAccountApi } from "../comosables/GetAccountApi";

//import appId
const appId = import.meta.env.VITE_APP_ID;

async function handleSubmit() {
  authorityStore.getAppId(appId);
  //要先等取得權限，在跳轉下一步驟
  await getAuthority();
  //成功，換到下個階段
  stepStore.nextStep();
  //失敗，跳出通知
}

async function getAuthority() {
  //====== 1. log in --取得userId 與accesssToken-=====================
  const { userID, accessToken } = await useLogIn(authorityStore.appId);

  //====== 2.  取得PageId 與accesssToken-=====================
  const pagesList = await useGetAccountApi(userID, accessToken);

  //儲存pages
  pageListStore.getPages(pagesList);
}
</script>

<style scoped></style>
