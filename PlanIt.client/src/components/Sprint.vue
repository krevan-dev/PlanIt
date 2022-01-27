<template>
  <div class="card shadow">
    <div class="card-header text-light d-flex">
      <h5>
        {{ sprint.name }}
        <i class="mdi mdi-delete selectable" @click="deleteSprint()"></i>
      </h5>
      <p class="m-0 px-3"><i class="mdi mdi-weight"></i> {{ tasksWeight }}</p>
    </div>
    <div class="card-body">
      <Task v-for="t in tasks" :key="t.id" :task="t" />

      <div class="createtaskmodal">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-outline-info"
          data-bs-toggle="modal"
          :data-bs-target="'#taskModal' + sprint.id"
        >
          Create New Task +
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="'taskModal' + sprint.id"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-light" id="exampleModalLabel">
                  Create a New Task!
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form @submit.prevent="createTask()">
                <div class="modal-body">
                  <p>What do I need to do today?</p>
                  <input
                    type="text"
                    v-model="newTask.name"
                    placeholder="Task..."
                    required="true"
                  />
                  <p>How hard is this task?</p>
                  <input
                    type="number"
                    v-model="newTask.weight"
                    min="1"
                    max="10"
                    required="true"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-info">Add Task</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { sprintsService } from '../services/SprintsService'
import { tasksService } from '../services/TasksService'
import { logger } from '../utils/Logger'
import { Modal } from 'bootstrap'
export default {
  props: {
    sprint: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const newTask = ref({ sprintId: props.sprint.id })
    return {
      newTask,
      sprints: computed(() => AppState.sprints),
      tasks: computed(() => AppState.tasks.filter(t => t.sprintId == props.sprint.id)),
      tasksWeight: computed(() => {
        const tasks = AppState.tasks.filter(t => t.sprintId == props.sprint.id && !t.isCompleted)
        let total = 0
        tasks.forEach(t => total += t.weight)
        return total
      }),
      async deleteSprint() {
        try {
          if (await Pop.confirm()) {
            await sprintsService.deleteSprint(props.sprint.projectId, props.sprint.id)
          }
        } catch (error) {
          Pop.toast(error.message, "error")
          logger.log(error)
        }
      },
      async createTask() {
        try {
          await tasksService.createTask(props.sprint.projectId, newTask.value)
          newTask.value = {}
          Modal.getOrCreateInstance(document.getElementById('taskModal' + props.sprint.id)).hide()
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
  color: #ef3eff;
}

.card-header {
  background-image: radial-gradient(#6901e1, #6b1592);
  font-family: "Dosis", sans-serif;
}

.modal-header {
  // background-image: linear-gradient(#a94eff, #441471);
  background-image: url("https://thumbs.gfycat.com/ArcticFaintDairycow-size_restricted.gif");
  background-position: center;
}

.modal-title {
  font-family: "Dosis", sans-serif;
}
</style>