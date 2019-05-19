<template lang="html">
  <div>
    {{ profile }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['profile'])
  },
  async asyncData({ params, store }) {
    await store.dispatch('initProfile', params)
    return {
      id: params.id
    }
  }
}
</script>
