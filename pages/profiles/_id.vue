<template lang="html">
  <div class="text-center">
    <div>
      <b-img
        center
        :src="profile.photoURL"
        fluid
        rounded="circle"
        alt="Responsive image"
        width="80px"
      ></b-img>
    </div>
    <p>{{ profile.displayName }} さん「にゃーん」を送ろう</p>
    <button
      class="nyan-btn pulse"
      :href="
        'http://www.twitter.com/messages/compose?recipient_id=' + profile.uid
      "
    >
      にゃーん
      <img
        src="https://s3.ap-northeast-1.amazonaws.com/image.btnmaker.me/iconImage-c0924150-2f04-11e9-929e-e5e0f9fd38ad.png"
        height="45px"
        class="pl-1"
      />
    </button>
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

<style>
p {
  font-size: 25px;
}
.nyan-btn {
  width: auto;
  min-width: 140px;
  height: auto;
  padding: 15px;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: rgb(255, 242, 204);
  border: none;
  border-radius: 45px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
</style>
