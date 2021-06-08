<template>
  <div>
    <DailyPic />
  </div>
</template>

<script>
import { nasasApiService } from '../services/NasasApiService'
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      nasasApiService.getDailyPic()
    })
    return {
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
