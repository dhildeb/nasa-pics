<template>
  <div class="about">
    <form @submit="search(state.query)">
      <input type="text" v-model="state.query" placeholder="yyyy-mm-dd">
      <button class="btn btn-info" type="submit">
        search
      </button>
    </form>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <EpicPic v-for="ep in epicPics" :key="ep.img" :epics="ep" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { nasasApiService } from '../services/NasasApiService'
import { AppState } from '../AppState'
export default {
  name: 'AboutPage',
  setup() {
    const state = reactive({
      query: '2019-05-30'
    })
    onMounted(() => {
      nasasApiService.epicApi(state.query)
    })
    return {
      state,
      epicPics: computed(() => AppState.epicPics),
      search(query) {
        AppState.epicPics = []
        nasasApiService.epicApi(query)
        query = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
