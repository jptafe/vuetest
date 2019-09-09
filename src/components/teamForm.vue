<template>
  <form v-on:submit.prevent="addTeam">
    <label>Name</label>
    <input name="team_name">
    <label>Color</label>
    <input name="color">
    <label>Image</label>
    <input name="image">
    <label>Submit</label>
    <input type="submit" value="submit">
  </form>
</template>

<script>
import store from '@/store'
export default {
  name: 'teamForm',
  methods: {
    addTeam (evt) {
      store.commit('addTeam', evt)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
