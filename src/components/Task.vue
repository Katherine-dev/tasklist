<template>
  <div class="task__view">
    <div class="task__header">
      <h4 title="Название задания" class="task__title">{{ task.title }}</h4>
      <i
        title="Изменить задание"
        @click="showEditModal"
        class="edit__icon bi bi-pencil-square"
      ></i>
      <i
        title="Удалить задание"
        @click="showDeleteModal"
        class="delete__icon bi bi-trash"
      ></i>
    </div>
    <div class="steps__container">
      <!-- Выводим первые 3 подзадачи задания на главном экране -->
      <div
        class="form-check"
        v-for="(step, index) in task.steps.slice(0, 3)"
        :key="index"
      >
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          :checked="step.done"
          disabled
        />
        <label class="form-check-label" for="flexCheckDefault">
          {{ step.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: null
  },
  methods: {
    showDeleteModal() {
      this.$store.commit('deleteTaskActive', this.task);
    },
    showEditModal() {
      this.$store.commit('editTaskActive', this.task);
    }
  }
}
</script>

<style lang="less" scoped>
.task {
  &__view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: solid 1px black;
    border-radius: 8px;
    margin: 20px;
    padding: 4px;
  }

  &__title {
    margin-right: 12px;
  }

  &__header {
    display: flex;
  }
}

.edit {
  &__icon {
    margin-right: 8px;
  }

  &__icon:hover {
    cursor: pointer;
    color: blue;
  }
}
.delete {
  &__icon:hover {
    cursor: pointer;
    color: maroon;
  }
}
</style>