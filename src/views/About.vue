<template>
  <div class="about">
    <h1>Players {{playerCount}} - Teams: {{teamCount}} </h1>
    <h3>{{teamMembers}}</h3>
  </div>
</template>
<script>
import store from '@/store'
export default {
  computed: {
    playerCount () {
      return store.getters.countPlayers
    },
    teamCount () {
      return store.getters.countTeams
    }
  },
  methods: {
    teamMembers () {
      store.commit('getPlayersInTeam', 5)
    }
  }
}
</script>
