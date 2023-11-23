<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        輸入你的App Id
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <FormKit type="form" @submit="handleSubmit">
        <FormKit type="text" label="App Id" name="appId" />
      </FormKit>
    </div>
  </div>
</template>

<script setup>
//import與使用useAuthorityStore
import { useAuthorityStore } from "../stores/AuthorityStore";
const authorityStore = useAuthorityStore();
import { useStepStore } from "../stores/StepStore";
const stepStore = useStepStore();
//import composables
import { useLogIn } from "../comosables/logIn";
import { useGetAccountApi } from "../comosables/GetAccountApi";

async function handleSubmit(data) {
  authorityStore.getAppId(data.appId);
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
  console.log(pagesList);
  //需要name id access_token
}
</script>

<style scoped></style>
