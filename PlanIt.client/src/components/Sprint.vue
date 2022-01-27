<template>
  <div class="card">
    <div class="card-header">
      <!-- <h4>{{ sprint.name }}</h4> -->
    </div>
    <div class="card-body">
      <!-- <p>{{ task.name }}<i class="mdi mdi-weight"></i>{{ task.weight }}</p> -->
    </div>
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
  setup(props) {
    return {
      tasks: computed(() => AppState.tasks.filter(t => t.sprintId == props.sprint.id))
    }
  }
}
</script>


<style lang="scss" scoped>
i {
  color: #bd15e0;
}
</style>