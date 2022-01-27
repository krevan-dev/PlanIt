<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="">
          <h2 class="m-3">The Name of your Project</h2>
          <p class="m-3">
            The super awesome description of your project thats super cool and
            not boring at all
          </p>
        </div>
      </div>
    </div>
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
      // project: computed(() => AppState.activeProject)
      // sprints: computed(() => AppState.sprints)
      // tasks: computed(() => AppState.tasks)
    }
  }
}
</script>


<style lang="scss" scoped>
i {
  color: blueviolet;
}

h2 {
  font-family: "Dosis", sans-serif;
}
</style>