<template>
  <div class="d-flex">
    <h6>{{ task.name }}<i class="mdi mdi-weight"></i>{{ task.weight }}</h6>
    <p class="px-2"><i class="mdi mdi-delete selectable" @click="deleteTask()"></i></p>
  </div>
</template>


<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(props){
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>

</style>