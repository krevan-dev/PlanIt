<template>
  <button
    class="btn btn-info"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    New Project +
  </button>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header text-light border border-2 border-light">
      <h5 id="offcanvasRightLabel">Create a new project!</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form @submit.prevent="createProject()">
        <input
          type="text"
          placeholder="Project Name..."
          v-model="newProject.name"
          required="true"
          class="border border-info border-2 m-3"
        />
        <input
          type="text"
          placeholder="Description..."
          v-model="newProject.description"
          required="true"
          class="border border-info border-2 m-3"
        />
      <button type="submit" class="btn btn-info">Create My Project</button>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { projectsService } from '../services/ProjectsService'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const newProject = ref({})
    const router = useRouter()
    return {
      newProject,
      async createProject() {
        try {
          const id = await projectsService.createProject(newProject.value)
          router.push({
            name: "Project",
            params: {id}
          })
        } catch (error) {
          
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.offcanvas-header {
  background-color: #6b1592;
}
</style>