import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ladders:
            [{ 'id': '1', 'game': 'TF2', 'description': '', 'players': '6', 'start_time': '2019-08-14 10:08:48', 'color': '000000', 'image': 'tf2.png' },
              { 'id': '2', 'game': 'Rocket League', 'description': '', 'players': '3', 'start_time': '2019-08-14 10:08:53', 'color': '000000', 'image': 'rocketleague.jpeg' },
              { 'id': '3', 'game': 'CS GO', 'description': '', 'players': '5', 'start_time': '2019-08-14 10:08:58', 'color': '000000', 'image': 'csgo.jpg' }],
    teams:
            [{ 'id': '3', 'team_name': 'readyriders', 'color': '999900', 'image': 'ra-lightning-bolt' },
              { 'id': '4', 'team_name': 'bluebleechers', 'color': '990000', 'image': 'ra-flat-hammer' },
              { 'id': '5', 'team_name': 'sunset', 'color': '990099', 'image': 'ra-dragon-breath' },
              { 'id': '6', 'team_name': 'tsunami', 'color': '009900', 'image': 'ra-cluster-bomb' },
              { 'id': '7', 'team_name': 'hawks', 'color': 'b73d00', 'image': 'ra-wyvern' }],
    players:
            [{ 'id': '4', 'name': 'kandigalaxy', 'seated_loc': 'centre', 'image': 'ra-speech-bubble', 'team_id': '3' },
              { 'id': '3', 'name': 'beatlecrusher', 'seated_loc': 'front', 'image': 'ra-rifle', 'team_id': '2' },
              { 'id': '4', 'name': 'craigmod', 'seated_loc': 'back', 'image': 'ra-muscle-fat', 'team_id': '3' },
              { 'id': '5', 'name': 'binglee', 'seated_loc': 'door', 'image': 'ra-kettlebell', 'team_id': '4' },
              { 'id': '6', 'name': 'vincesurf', 'seated_loc': 'centre', 'image': 'ra-frostfire', 'team_id': '4' },
              { 'id': '7', 'name': 'adamant', 'seated_loc': 'isle', 'image': 'ra-droplet-splash', 'team_id': '5' }]
  },
  mutations: {
    delPlayer (state, payload) {
      state.players.splice(
        state.players.map(
          function (x) {
            return x.id
          }
        ).us(payload), 1)
    },
    delTeam (state, payload) {
      state.teams.splice(
        state.teams.map(
          function (x) {
            return x.id
          }
        ).indexOf(payload), 1)
    },
    getPlayersInTeam (state, payload) {
      state.players.filter(function () { return state.players.team_id === payload })
    }
  },
  actions: {

  },
  getters: {
    getTeams (state) {
      return state.teams
    },
    getPlayers (state) {
      return state.players
    },
    countTeams (state) {
      return state.teams.length
    },
    countPlayers (state) {
      return state.players.length
    }
  }
})
