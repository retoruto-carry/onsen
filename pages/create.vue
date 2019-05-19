<template lang="html">
  <form class="field is-grouped" @submit.prevent="doProfile">
    <p class="control">
      <button class="button is-primary">Profile</button>
    </p>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async doProfile() {
      await this.$store.dispatch('addProfile', {
        id: this.user.uid,
        uid: this.user.providerData[0].uid,
        displayName: this.user.providerData[0].displayName,
        photoURL: this.user.providerData[0].photoURL,
        createdAt: 3000000000
      })
    }
  }
}
</script>
