<template>
  <div class="teams">
    <h1>Teams:</h1>
    <p v-for="team in teams" v-bind:key="team.id">
       <span>{{team.id}} - </span>
       <span>{{team.team_name}} - </span>
       <span>{{team.color}} - </span>
       <input type="button" :title="team.id" @click="delTeam" value="del">
    </p>
  </div>
</template>
<script>
import store from '@/store'
export default {
  computed: {
    teams () {
      return store.getters.getTeams
    }
  },
  methods: {
    delTeam (evt) {
      store.commit('delTeam', evt.srcElement.title)
    }
  }
}
</script>
