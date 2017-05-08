import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes: [],    //笔记列表
	activeNote: {}     //当前笔记
}

const mutations = {
	ADD_NOTE ( state) {    //添加笔记
		const newNote = {
		  title: 'New Note',
		  text: 'New Note',
		  see: true,
		  favorite: false
	    }
	    state.notes.push(newNote)
	    state.activeNote = newNote
	},

	EDIT_TITLE ( state, title) {    //修改标题
        state.activeNote.title = title
	},

	EDIT_NOTE ( state, text) {   //修改笔记内容
		state.activeNote.text = text
	},

	TOGGLE_SEE ( state, bol) {    //切换标题修改状态
		if(bol)  state.activeNote.see = !state.activeNote.see
	},

	TOGGLE_FAVORITE ( state) {   //切换喜爱状态
		state.activeNote.favorite = !state.activeNote.favorite
	},

    DELETE_NOTE ( state) {    //删除笔记
    	state.notes.$remove(state.activeNote)
    	state.activeNote = state.notes[0] || {}
    },

	SET_ACTIVE_NOTE ( state, note) {    //设置当前笔记
		state.activeNote = note
	}
	
}

export default new Vuex.Store({
	state,
	mutations
})
