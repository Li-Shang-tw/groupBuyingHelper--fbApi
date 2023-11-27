import { defineStore } from "pinia";

export const usePostListStore = defineStore("PostListStore", {
  state: () => {
    return {
      posts: [],
      cuurentPost: {},
    };
  },

  actions: {
    getPost(postList) {
      this.posts = postList;
    },
    selectPost(postId) {
      this.cuurentPost = this.posts.find((post) => post.id == postId);
    },
  },
});
