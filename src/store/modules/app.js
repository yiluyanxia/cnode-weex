const app = {
  state: {
    side: {
      isShow: false
    },

  },
  mutations: {
    TOGGLE_SIDE: state => {
      state.side.isShow = !state.side.isShow
    },
    SHOW_SIDE: (state) => {
      state.side.isShow = true
    },
    HIDE_SIDE: (state) => {
      state.side.isShow = false
    }

  },
  actions: {
    toggleSide({commit}){
      commit(' TOGGLE_SIDE')
    },
    showSide({commit}){
      commit('SHOW_SIDE')
    },
    hideSide({commit}){
      commit('HIDE_SIDE')
    }
  }


}

export default app