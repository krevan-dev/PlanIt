<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <input
        v-model="task.isComplete"
        class="form-check-input mx-1"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        @click="taskCompleted()"
      /> <h6>{{ task.name }}<i class="mdi mdi-weight"></i>{{ task.weight }}</h6>
      <p class="px-2"> <i class="mdi mdi-delete selectable" @click="deleteTask()"></i>
      </p>
    </div>
    <div>
      <Notes />
    </div>
  </div>
</template>


<script>
import { tasksService } from '../services/TasksService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      async deleteTask() {
        try {
          if (await Pop.confirm()) {
            await tasksService.deleteTask(props.task.projectId, props.task.id)
          }
        } catch (error) {
          Pop.toast(error.message, "error")
          logger.log(error)
        }
      },
      async taskCompleted() {
        try {
          await tasksService.taskCompleted(props.task)
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
</style>