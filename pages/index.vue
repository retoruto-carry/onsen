<template>
  <section class="container">
    <div v-if="!isLogin">
      <button @click="twitterLogin">Twitterでログインする</button>
    </div>
    <div v-else>
      <p>Welcome, {{ user.displayName }}！</p>
      <button @click="logout">ログアウト</button>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  asyncData() {
    return {
      isLogin: false,
      user: []
    }
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true
        this.user = user
      } else {
        this.isLogin = false
        this.user = []
      }
    })
  },
  methods: {
    twitterLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    logout() {
      firebase.auth().signOut()
    }
  }
}
</script>
