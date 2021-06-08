<template>
  <div class="about">
    <form @submit="search(state.query)">
      <input type="text" v-model="state.query">
      <button class="btn btn-info" type="submit">
        search
      </button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core'
import { nasasApiService } from '../services/NasasApiService'
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
      search(query) {
        nasasApiService.epicApi(query)
      }
    }
  }
}
</script>
