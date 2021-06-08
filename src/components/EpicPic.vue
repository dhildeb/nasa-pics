<template>
  <div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      epicPics: computed(() => AppState.epicPics)
    })

    return {
      state
    }
  }
}

</script>

<style>

</style>
