<template>

  <div class="container-fluid ineedmargin">
    <div class="card m-4 projectcard shadow selectable">
      <div class="card-body p-5">
        <h5 class="card-title cardtitle">{{project.name}}</h5>
        <p class="card-text carddescription">
          {{project.description}}
        </p>
      </div>
    </div>
  </div>

</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
  setup(){
    return {
      projects: computed(() => AppState.projects)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>