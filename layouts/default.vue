<template>
  <div>
    <top-nav/>
    <nuxt />
    <bottom-nav/>
  </div>
</template>

<script>
import TopNav from './partials/TopNav';
import BottomNav from './partials/BottomNav';
export default {
  components: {
    TopNav,
    BottomNav
  }
}
</script>

