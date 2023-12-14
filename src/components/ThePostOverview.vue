<template>
  <div class="bg-white p-8 rounded-md w-full">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">貼文總覽</h2>
        <span class="text-xs">Post Overview</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            v-model="search"
            class="bg-gray-50 outline-none ml-1 block"
            type="text"
            name=""
            id=""
            placeholder="search..."
          />
        </div>
        <div class="lg:ml-40 ml-10 space-x-8">
          <button
            class="bg-blue-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
            @click="showAll"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  商品名稱
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  建立時間
                  <button @click="changeOrder('asc')">
                    <font-awesome-icon
                      :icon="['fas', 'circle-up']"
                      class="mx-2"
                      v-if="order == 'desc'"
                    />
                  </button>
                  <button @click="changeOrder('desc')">
                    <font-awesome-icon
                      :icon="['fas', 'circle-down']"
                      class="mx-2"
                      v-if="order == 'asc'"
                    />
                  </button>
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  留言數
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="post in posts"
                :key="post.id"
                @click="() => checkDetail(post.id)"
              >
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ showHashTag(post.hastage) }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ useFormatTime(post["created_time"]) }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ post.comments.length }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { usePostListStore } from "../stores/PostListStore";
import { useStepStore } from "../stores/StepStore";
const postListStore = usePostListStore();
const stepStore = useStepStore();

import { useFormatTime } from "../comosables/FormatTime";
import { showHashTag } from "../comosables/ShowHashTag";
// import { search } from "@formkit/icons";

//---本元件的posts
const posts = ref([]);
const search = ref("");
const order = ref("asc");
//初始化:渲染所有posts
showAll();
//======搜尋功能=========
//監聽search
watch(
  () => search.value,
  () => {
    //search模式:當點選input
    if (search.value) {
      //必須要用完整的posts來做篩選
      const newPosts = postListStore.posts.filter((item) => {
        if (item.hastage.includes(search.value)) {
          return item;
        }
        //當hastage有兩個以上
        if (Array.isArray(item.hastage)) {
          for (let tage of item.hastage) {
            if (tage.includes(search.value)) {
              return item;
            }
          }
        }
      });
      posts.value = newPosts;
    }
  }
);
//show All
function showAll() {
  posts.value = postListStore.posts;
}
//======排序功能=========
//監聽排序
watch(
  //function可以拿到當下最新的
  () => order.value,
  () => {
    if (order.value == "asc") {
      console.log("asc---");
      posts.value = useSortTime(posts.value, "asc");
    } else if (order.value == "desc") {
      console.log("desc---");
      posts.value = useSortTime(posts.value, "desc");
    }
  }
);

//======時間排序=========
import { useSortTime } from "../comosables/SortTime";

function changeOrder(direction) {
  order.value = direction;
}

function checkDetail(postId) {
  postListStore.selectPost(postId);
  stepStore.nextStep();
}
</script>

<style scoped></style>
