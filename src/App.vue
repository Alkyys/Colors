<template>
  <div id="app">
    <button @click="changePage">
      Change
    </button>
    <div id="nav">
      <router-link to="/">
        Palette de couleur
      </router-link> |
      <router-link to="/degrade">
        Degrade
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('SET_ITEMS', {
      items: [
        'Vert',
        'Violet',
        'Bleu',
        'Orange',
        'Jaune',
        'Rouge',
        'Gris',
        'Noir'
      ]
    })
  },

  methods: {
    changePage () {
      this.$store.dispatch('changeCurrentPage', { currentPage: 3 })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    list-style: none;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
