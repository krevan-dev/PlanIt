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
      <form action="input">
        <input
          type="text"
          placeholder="Project Name..."
          required="true"
          class="border border-info border-2 m-3"
        />
        <input
          type="text"
          placeholder="Description..."
          required="true"
          class="border border-info border-2 m-3"
        />
      </form>
      <button class="btn btn-info">Create My Project</button>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.offcanvas-header {
  background-color: #6b1592;
}
</style>