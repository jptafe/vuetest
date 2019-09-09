<template>
  <div>
    <select name="teamid">
      <option v-for="team in teams" v-bind:key="team.id" name="team_id" :value="team.id">
        {{team.team_name}}
      </option>
    </select>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'teamdropdown',
  computed: {
    teams () {
      return store.getters.getTeams
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
