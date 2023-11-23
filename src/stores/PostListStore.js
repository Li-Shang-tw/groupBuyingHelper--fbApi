import { defineStore } from "pinia";

export const usePostListStore = defineStore("PostListStore", {
  state: () => {
    return {
      posts: [],
    };
  },
  actions: {
    getPost(postList) {
      this.posts = postList;
    },
  },
});
