<template>
    <select name="playerid">
      <option v-for="player in players" v-bind:key="player.id" :value="player.id">{{player.name}}</option>
    </select>
</template>

<script>
import store from '@/store'
export default {
  name: 'playerdropdown',
  computed: {
    players () {
      return store.getters.getPlayers
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
