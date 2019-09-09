<template>
  <form v-on:submit.prevent="addPlayer">
    <label>Name</label>
    <input name="name">
    <label>Seated Location</label>
    <input name="seated_loc">
    <label>Color</label>
    <input name="color">
    <label>Image</label>
    <input name="image">
    <label>Team</label>
    <teamDropdown></teamDropdown>
    <label>Submit</label>
    <input type="submit" value="submit">
  </form>
</template>

<script>
import store from '@/store'
import teamDropdown from '@/components/teamDropdown.vue'

export default {
  name: 'playerForm',
  components: {
    teamDropdown
  },
  methods: {
    addPlayer (evt) {
      store.commit('addPlayer', evt)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
