<script setup>
//import 與StepStore，來決定前的步驟
import { useStepStore } from "./stores/StepStore";
const stepStore = useStepStore();
//import component
import TheLogin from "./components/TheLogin.vue";
import ThePageOverview from "./components/ThePageOverview.vue";
</script>

<template>
  <TheLogin v-if="stepStore.step == 1" />
  <ThePageOverview v-else-if="stepStore.step == 2" />
</template>

<style scoped></style>
