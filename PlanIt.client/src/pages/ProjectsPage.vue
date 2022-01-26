<template>
  <div class="component">
    <div v-for="p in projects" :key="p.id" :project="p"></div>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>