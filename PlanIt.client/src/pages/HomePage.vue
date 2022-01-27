<template>
  <div v-if="account.id">
    <div class="d-flex justify-content-between">
      <h2 class="text-center welcome m-3">
        💜 Welcome to your project page! 💜
      </h2>
      <button class="btn btn-info m-3">New Project +</button>
    </div>
    <div class="container-fluid ineedmargin">
      <div
        class="card m-4 projectcard shadow selectable"
        @click="goToProjectPage"
      >
        <div class="card-body p-5">
          <h5 class="card-title cardtitle">Project Name</h5>
          <p class="card-text carddescription">
            This is gonna be the super cool description of the project that we
            are all super excited about.
          </p>
        </div>
      </div>

      <div class="card m-4 projectcard shadow selectable">
        <div class="card-body p-5">
          <h5 class="card-title cardtitle">Project Name</h5>
          <p class="card-text carddescription">
            This is gonna be the super cool description of the project that we
            are all super excited about.
          </p>
        </div>
      </div>

      <div class="card m-4 projectcard shadow selectable">
        <div class="card-body p-5">
          <h5 class="card-title cardtitle">Project Name</h5>
          <p class="card-text carddescription">
            This is gonna be the super cool description of the project that we
            are all super excited about.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img
        src="https://cdn.freelogodesign.org/files/cec092aaa70248eea0f51596bcf9f4ae/thumb/logo_200x200.png?v=0"
        alt="CodeWorks Logo"
        class="rounded-circle"
      />
      <h1 class="my-5 text-white p-3 rounded text-center signInCard">
        Welcome to PlanIt. Please sign in to continue.
      </h1>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
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
  width: 90%;
}

.cardtitle {
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  font-size: 24px;
}

.carddescription {
  font-family: "Work Sans", sans-serif;
}

.ineedmargin {
  margin-left: 3em;
}

.welcome {
  font-family: "Dosis", sans-serif;
  font-weight: 500;
}
</style>
