<template>
  <div class="bg-white p-8 rounded-md w-full">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">
          貼文商品: {{ showHashTag(postListStore.cuurentPost.hastage) }}
        </h2>
        <h3 class="text-gray-600 font-semibold">內容:</h3>
        <p>{{ postListStore.cuurentPost.message }}</p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex bg-gray-50 items-center p-2 rounded-md">
          <h3 class="text-gray-600 font-semibold">發文時間:</h3>
          <p>{{ useFormatTime(postListStore.cuurentPost["created_time"]) }}</p>
        </div>
        <div class="lg:ml-40 ml-10 space-x-8">
          <button
            @click="stepStore.backStep"
            class="bg-blue-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
          >
            回貼文總覽
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
                  買家
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  留言時間
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  種類
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  數量
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="comment in commentMessage" :key="comment.id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ useExtractMessage(comment.message, "name") }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ useFormatTime(comment["created_time"]) }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ useExtractMessage(comment.message, "productType") }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ useExtractMessage(comment.message, "number") }}
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
import { computed, ref } from "vue";
import { usePostListStore } from "../stores/PostListStore";
import { useExtractMessage } from "../comosables/ExtractMessage";
import { useFormatTime } from "../comosables/FormatTime";
import { showHashTag } from "../comosables/ShowHashTag";
import { useStepStore } from "../stores/StepStore";
const postListStore = usePostListStore();
const stepStore = useStepStore();
const commentMessage = ref(postListStore.cuurentPost.comments);
</script>

<style scoped></style>
