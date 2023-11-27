<script setup>
//import 與StepStore，來決定前的步驟
import { useStepStore } from "./stores/StepStore";
const stepStore = useStepStore();
//import component
import TheLogin from "./components/TheLogin.vue";
import ThePageOverview from "./components/ThePageOverview.vue";
import ThePostOverview from "./components/ThePostOverview.vue";
import ThePostDetail from "./components/ThePostDetail.vue";
</script>

<template>
  <TheLogin v-if="stepStore.step == 1" />
  <ThePageOverview v-else-if="stepStore.step == 2" />
  <ThePostOverview v-else-if="stepStore.step == 3" />
  <ThePostDetail v-else-if="stepStore.step == 4" />
</template>

<style scoped></style>
