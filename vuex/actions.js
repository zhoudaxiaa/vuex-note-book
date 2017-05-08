export const addNote = ( {dispatch} ) => {
	dispatch('ADD_NOTE')
}

export const editTitle = ({ dispatch }, e) => {
	dispatch('EDIT_TITLE',e.target.value)
}

export const editNote = ({ dispatch }, e) => {
	dispatch('EDIT_NOTE',e.target.value)
}

export const toggleSee = ({ dispatch }, bol) => {
	dispatch('TOGGLE_SEE',bol)
}

export const toggleFavorite = ({ dispatch }) => {
	dispatch('TOGGLE_FAVORITE')
}

export const deleteNote = ({ dispatch }) => {
	dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
	dispatch('SET_ACTIVE_NOTE',note)
}