<template>
  <div v-if="account.id">
    <h2 class="text-center m-4 welcome">
      💜 Welcome to your projects page! 💜
      <NewProjectForm />
    </h2>
    <Project v-for="p in projects" :key="p.id" :project="p" />
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
      account: computed(() => AppState.account),
      projects: computed(() => AppState.projects)
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

.welcome {
  font-family: "Dosis", sans-serif;
}
</style>
