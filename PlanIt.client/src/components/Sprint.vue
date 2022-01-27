<template>
  <div class="card">
    <div class="card-header">
      <h5>{{sprint.name}}<i class="mdi mdi-delete selectable" @click="deleteSprint"></i></h5>
    </div>
    <div class="card-body">

      <!-- <Task /> -->

                <div class="createtaskmodal">
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-outline-info"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Create New Task +
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
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
                  <div class="modal-body">
                    <form>
                      <p>What do I need to do today?</p>
                      <input
                        type="text"
                        placeholder="Task..."
                        required="true"
                      />
                      <p>How hard is this task?</p>
                      <input type="number" min="1" max="10" required="true" />
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-info">Add Task</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    },
    task: {
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