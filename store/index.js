import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'
const firestore = firebase.firestore()

export const strict = false

export const state = () => ({
  user: null,
  profile: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  saveProfile(state, { profile }) {
    state.profile = profile
  }
}

export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  },
  addProfile: firebaseAction(
    (ctx, { id, uid, username, displayName, photoURL, createdAt }) => {
      firestore
        .collection('profiles')
        .doc(`${id}`)
        .set({
          uid,
          username,
          displayName,
          photoURL,
          createdAt
        })
    }
  ),
  async initProfile({ commit }, { id }) {
    const snapshot = await firestore
      .collection('profiles')
      .doc(id)
      .get()
    commit('saveProfile', { profile: snapshot.data() })
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  user: state => state.user,
  profile: state => {
    const profile = state.profile
    if (!profile) return null
    // profile.user = state.users.find(user => user.id === profile.user_id)
    return profile
  }
}
