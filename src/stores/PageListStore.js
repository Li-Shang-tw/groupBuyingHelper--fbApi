import { defineStore } from "pinia";

export const usePageListStore = defineStore("PageListStore", {
  state: () => {
    return {
      pages: [],
    };
  },
  actions: {
    getPages(pageList) {
      this.pages = pageList;
    },
  },
});
