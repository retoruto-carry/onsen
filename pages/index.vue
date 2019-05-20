<template>
  <div>
    <h1>にゃーんを送れるページを作れるウェブサービス</h1>
    <div v-if="isAuthenticated">
      <nuxt-link :to="'/profiles/' + user.uid">
        マイページへ
      </nuxt-link>
    </div>
    <div v-else>
      <p>ログインして自分のページを作成しよう</p>
      <b-button variant="success" to="/account">twitterでログイン</b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  }
}
</script>
