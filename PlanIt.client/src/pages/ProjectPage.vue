<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="">
          <h2 class="m-3">{{project.name}} <i class="mdi mdi-delete selectable" @click="deleteProject()"></i></h2>
          <p class="m-3">
            {{project.description}}
          </p>
          <div class="d-flex justify-content-end px-5">
            <form @submit.prevent="createSprint()">
              <input
                type="text"
                placeholder="Sprint Name..."
                v-model="newSprint.name"
                required="true"
                class="border border-info border-2 m-3"
              />
              <button type="submit" class="btn btn-outline-info">Create Sprint</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <Sprint class="col-md-12" v-for="s in sprints" :key="s.id" :sprint="s" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { projectsService } from '../services/ProjectsService'
import { sprintsService } from '../services/SprintsService'
export default {
  setup() {
    const newSprint = ref({})
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        await projectsService.getProjectById(route.params.id)
        await sprintsService.getSprints(route.params.id)
      } catch (error) {
        Pop.toast(error.message, "error")
        logger.log(error)
      }
      //TODO get project based on route params id
      //TODO get sprints based on route params id
      //TODO get tasks based on route params id
    })
    return {
      newSprint,
      project: computed(() => AppState.activeProject),
      sprints: computed(() => AppState.sprints),
      tasks: computed(() => AppState.tasks),
      async createSprint() {
        try {
          await sprintsService.createSprint(route.params.id, newSprint.value)
        } catch (error) {
          Pop.toast(error.message, "error")
          logger.log(error)
        }
      },
      async deleteProject() {
        try {
          if (await Pop.confirm()) {
            await projectsService.deleteProject(route.params.id)
            router.push({
              name: "Home"
            })
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
  color: blueviolet;
}

h2 {
  font-family: "Dosis", sans-serif;
}
</style>