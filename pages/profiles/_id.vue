<template lang="html">
  <div>
    <b-img :src="profile.photoURL" fluid alt="Responsive image"></b-img>
    {{ profile.displayName }} さんにゃーんを送ろう
    <b-button
      :href="
        'http://www.twitter.com/messages/compose?recipient_id=' + profile.uid
      "
      variant="outline-primary"
      >にゃーん</b-button
    >
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
