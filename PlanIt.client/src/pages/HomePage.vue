<template>
  <div class="container-fluid">
    <div class="card m-4 projectcard">
      <div class="card-body p-5">
        <h5 class="card-title cardtitle">Project Name</h5>
        <p class="card-text carddescription">
          This is gonna be the super cool description of the project that we are
          all super excited about.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  background-color: #f3f3f3;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.signInCard {
  background-color: #6b1592;
  font-family: "Dosis", sans-serif;
}

.projectcard {
  border-color: #8900ed;
  border-width: 5px;
}

.cardtitle {
  font-family: "Dosis", sans-serif;
  font-weight: 500;
}
</style>
