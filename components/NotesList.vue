<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!--all notes button-->
        <div class="btn-group" role="group">
          <button type="button"
            @click="show='all'"
            class="btn btn-default"
            :class="{active:show === 'all'}">
            All Notes
          </button>
        </div>
        <!--favorite button-->
        <div class="btn-group" role="group">
          <button type="button"
            @click="show='favorite'"
            class="btn btn-default"
            :class="{active:show === 'favorite'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <div v-for="note in filteredNotes"
          @click="updateActiveNote(note)"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}">
          <h4 v-show="note.see"
            class="list-group-item-heading">
            {{ note.title.trim() }}
          </h4>
          <input v-else type="text"
            @input="editTitle"
            class="title"
            :value="note.title.trim()" />
          <span @click="toggleSee(activeNote === note)">改</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { updateActiveNote,  editTitle, toggleSee} from '../vuex/actions'

  export default {
    data (){
      return {
        show: 'all'
      }
    },
    vuex: {
      getters: {
        activeNote: state => state.activeNote,
        notes: state => state.notes
      },
      actions: {
        editTitle,
        toggleSee,
        updateActiveNote
      }
    },
    computed: {
      filteredNotes () {
        if (this.show === 'all'){
          return this.notes;
        }else{
          return this.notes.filter(note => note.favorite)
        }
      }
    }
  }
</script>