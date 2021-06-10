<template>
  <div>
    <img class="img" :src="epics.img" alt="no img">
    <span>{{ epics.date }}</span>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue'
// import { AppState } from '../AppState'

export default {
  props: {
    epics: { type: Object, required: true }
  },
  setup() {
    return {
    }
  }
}

</script>

<style>
.img{
  height: 75vh;
}
</style>
