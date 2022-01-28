<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <div class="d-flex justify-content-center">
    <form @submit.prevent="editAccount()">
      <input class="form-control" type="text" :v-model="newAccount.name" placeholder="New Account Name..." aria-label="default input example">
      <button type="submit" class="btn btn-outline-info">Update Account Name</button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { accountService } from '../services/AccountService'
export default {
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  name: 'Account',
  setup(props) {
    const newAccount = ref({})
    return {
      newAccount,
      account: computed(() => AppState.account),
      async editAccount() {
        try {
          debugger
          await accountService.editAccount(props.account, newAccount.value)
        } catch (error) {
          Pop.toast(error.message, "error")
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
