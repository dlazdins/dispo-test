<template>
  <TheHeader />
  <router-view/>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'


export default {
  name: 'HomeView',
  components: {
    TheHeader,
		TheFooter,
  }
}
</script>

<style lang="scss">
@import "./assets/scss/common-styles";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: $font-family-regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  flex: 1; /* This will make the main content expand to fill the space */
}

</style>
