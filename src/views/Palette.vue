<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <span>Current page : {{ currentPage }}</span>
    <span
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </span>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    currentPage () {
      return this.$store.state.currentPage
    },
    items () {
      return this.$store.getters.sortedItems
    }
  }
}
</script>
