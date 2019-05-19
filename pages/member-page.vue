<template>
  <members-only>
    <h1>ログインしていないと見れないページ</h1>
    <a href="/account">アカウントページへ</a>
  </members-only>
</template>

<script>
import MembersOnly from '~/components/organisms/membersOnly.vue'

export default {
  components: {
    MembersOnly
  }
}
</script>
