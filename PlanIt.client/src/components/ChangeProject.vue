<template>
  <button
    class="btn btn-info"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <i class="mdi mdi-ballot-outline"></i>
    All Projects
  </button>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvaslol"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="text-light">All Projects</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <p>
        all projects will go here that are selectable and can be routed to that
        project page :,)
      </p>
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
  background-image: url("https://media0.giphy.com/media/jsUIl8W67ohMXGx1V8/giphy.gif");
  background-position: center;
  font-family: "Dosis", sans-serif;
}
</style>