<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Tabbar'
}
</script>

<style>
    #tab-bar {
    display: flex;
    background-color: #fefefe;

    box-shadow: 0 -1px 3px rgba(0,0,0,0.2);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>