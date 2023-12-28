<script setup>
//import 與StepStore，來決定前的步驟
import { useStepStore } from "./stores/StepStore";
const stepStore = useStepStore();
//import component
import Login from "./components/Login.vue";
import PageOverview from "./components/PageOverview.vue";
import PostOverview from "./components/PostOverview.vue";
import PostDetail from "./components/PostDetail.vue";
</script>

<template>
  <Login v-if="stepStore.step === 1" />
  <PageOverview v-else-if="stepStore.step === 2" />
  <PostOverview v-else-if="stepStore.step === 3" />
  <PostDetail v-else-if="stepStore.step === 4" />
</template>

<style scoped></style>
