<template>
  <div class="component">
    {{sprint}}
    <!-- {{tasks}} -->
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  props: {
    sprint: {
      type: Object,
      required: true
    }
  },
  setup(props){
    return {
      // tasks: computed(() => AppState.tasks.filter(t => t.sprintId == props.sprint.id))
    }
  }
}
</script>


<style lang="scss" scoped>

</style>