import { defineStore } from "pinia";

export const useAuthorityStore = defineStore("AuthorityStore", {
  state: () => {
    return {
      appId: "",
    };
  },
  actions: {
    getAppId(id) {
      this.appId = id;
    },
  },
});
