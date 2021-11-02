<template>
  <MainView />
  <ConfirmModal v-if="isDeleting || isExitEditing" />
  <EditModal v-if="isEditing" />
  <CreateTaskModal v-if="isCreating" />
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
  computed: {
    isDeleting(){
      return this.$store.state.deleteTask;
    },
    isEditing(){
      return this.$store.state.editTask;
    },
    isExitEditing(){
      return this.$store.state.isExitEditing;
    },
    isCreating(){
      return this.$store.state.isCreatingTask;
    },
  },
  mounted() {
    this.$store.commit('initTasks');
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
