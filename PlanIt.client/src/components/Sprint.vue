<template>
  <div class="card">
    <div class="card-header">
      <h5>{{sprint.name}}<i class="mdi mdi-delete selectable" @click="deleteSprint"></i></h5>
    </div>
    <div class="card-body">
      <!-- <p>{{ task.name }}<i class="mdi mdi-weight"></i>{{ task.weight }}</p> -->
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { sprintsService } from '../services/SprintsService'
export default {
  props: {
    sprint: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      sprints: computed(() => AppState.sprints),
      tasks: computed(() => AppState.tasks.filter(t => t.sprintId == props.sprint.id)),
      async deleteSprint() {
        try {
          if (await Pop.confirm()) {
            await sprintsService.deleteSprint(props.sprint.projectId, props.sprint.id)
          }
        } catch (error) {
          Pop.toast(error.message, "error")
          logger.log(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
i {
  color: #bd15e0;
}
</style>