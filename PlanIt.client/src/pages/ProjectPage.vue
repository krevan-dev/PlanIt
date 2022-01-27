<template>
  <div class="container-fluid">
    <p>{{project.name}}</p>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { projectsService } from '../services/ProjectsService'
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await projectsService.getProjectById(route.params.id)
      } catch (error) {
        Pop.toast(error.message, "error")
        logger.log(error)
      }
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