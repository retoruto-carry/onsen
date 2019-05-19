<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">ナビバー</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact>
          新着
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style></style>
