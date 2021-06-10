<template>
  <form @submit="searchDailyPic(state.query)">
    <input type="text" v-model="state.query" placeholder="yyyy-mm-dd">
    <button type="submit">
      search
    </button>
  </form>
  <div>
    <DailyPic />
  </div>
</template>

<script>
import { nasasApiService } from '../services/NasasApiService'
import { onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({
      query: ''
    })
    onMounted(() => {
      nasasApiService.getDailyPic()
    })
    return {
      state,
      searchDailyPic(query) {
        AppState.dailyPic = null
        nasasApiService.searchDailyPic(query)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  user-select: none;
  > img {
    height: 200px;
    width: 200px;
  }
}
</style>
