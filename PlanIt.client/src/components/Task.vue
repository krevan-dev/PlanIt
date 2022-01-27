<template>
  <div class="d-flex">
    <p class="px-2"></p>
    <h6>{{ task.name }} <i class="mdi mdi-weight"></i>{{ task.weight }}</h6>
    <i class="mdi mdi-delete selectable mb-3 mx-3" @click="deleteTask()"></i>
  </div>
  <Notes />
</template>


<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>