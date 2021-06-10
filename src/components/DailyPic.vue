<template>
  <div
    class="
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
    v-if="state.dailyPic"
  >
    <h1 class="py-3 rounded d-flex align-items-center">
      <span class="m-auto">{{ state.dailyPic.title }}</span>
    </h1>
    <div class="d-flex p-3">
      <img :src="state.dailyPic.url" :alt="state.dailyPic.title" />
      <h2 class="p-5">
        {{ state.dailyPic.description }}
      </h2>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      dailyPic: computed(() => AppState.dailyPic)
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
img{
  height: 75vh;
}
</style>
