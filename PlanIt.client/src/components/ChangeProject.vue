<template>
  <button
    class="btn btn-info"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasTop"
    aria-controls="offcanvasTop"
  >
    All Projects
  </button>

  <div
    class="offcanvas offcanvas-top"
    tabindex="-1"
    id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel"
  >
    <div class="offcanvas-header text-center">
      <h5 id="offcanvasTopLabel" class="text-light">All Projects</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">All projects will be populated here :)</div>
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