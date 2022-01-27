<template>
  <div class="container-fluid">
    <p>hi mom</p>
  </div>
</template>


<script>
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()
    onMounted(() => {
      //TODO get project based on route params id
      //TODO get sprints based on route params id
      //TODO get tasks based on route params id
    })
    return {
      project: computed(() => AppState.activeProject)
      // sprints: computed(() => AppState.sprints)
      // tasks: computed(() => AppState.tasks)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>