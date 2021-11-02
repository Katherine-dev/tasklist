<template>
  <div class="main__view">
    <div class="tasks" v-for="task in tasks" :key="task.id">
      <task class="g-col-6" :task="task" />
    </div>
  </div>
</template>

<script>
import Task from './src/components/Task.vue'

export default {
  components: {
    Task,
  },
  computed: {
    tasks(){
      return this.$store.state.tasks;
    }
  }
}
</script>
