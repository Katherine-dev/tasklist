<template>
  <MainView />
  <ConfirmModal v-if="isDeleting || isEditingModal" />
  <EditModal v-if="isEditing" />
  <create-task-modal v-if="isCreating" />
</template>

<script>
import MainView from '../MainView.vue';
import ConfirmModal from './components/ConfirmModal.vue';
import EditModal from './components/EditModal.vue';
import CreateTaskModal from './components/CreateTaskModal.vue';


export default {
  name: "App",
  components: {
    MainView,
    ConfirmModal,
    EditModal,
    CreateTaskModal
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
    isEditingModal(){
      return this.$store.state.isEditingModal;
    },
    isCreating(){
      return this.$store.state.isCreatingTask;
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
