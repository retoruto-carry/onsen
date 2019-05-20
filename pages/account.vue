<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      ログイン中です<br />
      <button @click="logout">ログアウト</button><br />
      <a href="/member-page">メンバーページへ</a>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      <button @click="login">twitterでログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions(['setUser']),
    async login() {
      const provider = new firebase.auth.TwitterAuthProvider()
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then(async result => {
          await this.addProfile(result)
          // ログインしたら飛ぶページを指定
          this.$router.push('/profiles/' + result.user.uid)
        })
        .catch(error => {
          alert(error)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
        })
        .catch(error => {
          alert(error)
        })
    },
    async addProfile(result) {
      // eslint-disable-next-line no-console
      console.log(result)
      await this.$store.dispatch('addProfile', {
        id: result.user.uid,
        uid: result.user.providerData[0].uid,
        username: result.additionalUserInfo.username,
        displayName: result.user.providerData[0].displayName,
        photoURL: result.user.providerData[0].photoURL,
        createdAt: 3000000000
      })
    }
  }
}
</script>
