<template>
  <div class="component">
    <p>{{ task.name }}<i class="mdi mdi-weight"></i>{{ task.weight }}</p>
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