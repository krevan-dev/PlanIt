<template>
  <div class="d-flex justify-content-between align-items-center task">
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
      <div class="btn-group">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Change Sprint
        </button>
        <ul class="px-1 dropdown-menu">
          <li v-for="s in sprints" :key="s.id" class="selectable" @click="editTask(s.id)">{{s.name}}</li>
        </ul>
      </div>
    </div>
    <div>
      <Notes />
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
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
      sprints: computed(() => AppState.sprints),
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
      },
      async editTask(newSprintId) {
        try {
          await tasksService.editTask(props.task, newSprintId)
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
.task:hover {
  background-color: rgba(128, 128, 128, 0.1);
}
</style>