import { defineStore } from "pinia";

export const useStepStore = defineStore("StepStore", {
  state: () => {
    return {
      step: 1,
    };
  },
  actions: {
    nextStep() {
      this.step += 1;
    },
    backStep() {
      this.step -= 1;
    },
  },
});
