<template>
  <div class="players">
    <h1>Players:</h1>
    <p v-for="player in players" v-bind:key="player.id">
       <span>{{player.id}} - </span>
       <span>{{player.name}} - </span>
       <span>{{player.seated_loc}} - </span>
       <input type="button" :title="player.id" @click="delPlayer" value="DEL">
    </p>
    <playerForm></playerForm>
  </div>
</template>
<script>
import store from '@/store'
import playerForm from '@/components/playerForm.vue'

export default {
  components: {
    playerForm
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
