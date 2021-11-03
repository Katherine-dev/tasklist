<template>
  <div class="main__view">
    <div class="header">
      <button class="btn btn-primary" @click="createTask">
        Добавить задание
      </button>
    </div>
    <div class="tasks" v-for="task in tasks" :key="task.id">
      <task :task="task" />
    </div>
  </div>
</template>

<script>
import Task from './src/components/Task.vue'
export default {
  components: { Task },
  computed: {
    tasks(){
      return this.$store.state.tasks
    }
  },
  methods: {
    createTask() {
      this.$store.commit('createTaskActive')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
}
</style>