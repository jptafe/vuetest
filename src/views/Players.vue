<template>
  <div class="players">
    <h1>Players:</h1>
    <p v-for="player in players" v-bind:key="player.id">
       <span>{{player.id}} - </span>
       <span>{{player.name}} - </span>
       <span>{{player.seated_loc}} - </span>
       <input type="button" :title="player.id" @click="delPlayer" value="DEL">
    </p>
    <playerDropdown></playerDropdown>
  </div>
</template>
<script>
import store from '@/store'
import playerDropdown from '@/components/playerDropdown.vue'

export default {
  components: {
    playerDropdown
  },
  computed: {
    players () {
      return store.getters.getPlayers
    }
  },
  methods: {
    delPlayer (evt) {
      store.commit('delPlayer', evt.srcElement.title)
    }
  }
}
</script>
