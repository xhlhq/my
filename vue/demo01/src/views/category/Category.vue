<template>
  <div id="gategory">
      <main-nav></main-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import MainNav from '../../components/navbar/MainNav'
export default {
    name:'Gategory',
    components: {
      MainNav
    }
}
</script>

<style>

</style>