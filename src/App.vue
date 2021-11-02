<template>
  <MainView />
  <ConfirmModal v-if="isDeleting || isCloseEditing" />
  <EditModal v-if="isEditing" />
</template>

<script>
import MainView from "../MainView.vue";
import ConfirmModal from './components/ConfirmModal.vue'
import EditModal from './components/EditModal.vue'


export default {
  name: "App",
  components: {
    MainView,
    ConfirmModal,
    EditModal
  },
  data: function() {
    return {
      task: null,
      isTaskOpen: false
    }
  },
  computed: {
    isDeleting(){
      return this.$store.state.deleteTask;
    },
    isEditing(){
      return this.$store.state.editTask;
    },
     isCloseEditing(){
      return this.$store.state.isEditingModal;
    },
  } 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
