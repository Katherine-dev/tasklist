<template class="MyModal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <input
        class="form-control title"
        type="text"
        v-model="newTask.title"
        placeholder="Название..."
      />
      <div class="steps">
        <div
          class="form-check"
          ref="formCheck"
          v-for="(step, index) in newTask.steps"
          :key="index"
        >
          <input
            class="form-check__input"
            type="checkbox"
            id="flexCheckDefault"
            :checked="step.done"
            v-model="step.done"
          />
          <input
            class="form-control step"
            placeholder="Имя задачи"
            for="flexCheckDefault"
            v-model="step.name"
          />
          <i @click="addSubtask" class="bi bi-plus-circle"></i>
          <i @click="removeSubtask(index)" class="bi bi-x-circle"></i>
        </div>
        <div class="modal-footer">
          <button class="modal-default-button btn btn-primary" @click="save">
            OK
          </button>
          <button class="modal-default-button btn btn-secondary" @click="close">
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      newTask: {
        title: '',
        steps: [{}]
      }
    }
  },
  methods: {
    addSubtask() {
      this.newTask.steps.push({})
    },
    removeSubtask(stepId) {
      if (this.newTask.steps.length > 1) {
        this.newTask.steps = this.newTask.steps.filter((step, i) => i !== stepId )
      } else {
        alert("Нужно оставить минимум одну задачу")
      }
    },
    save() {
       if (this.newTask.title.trim() && this.newTask.steps.length !== 0) {
        this.$store.commit('addTask', this.newTask);
        this.$store.commit('createTaskInactive');
        this.$store.commit('saveTasks');
       } else {
         alert('Вы не ввели название или подзадачи задания')
       }
    },
    close() {
      this.$store.commit('createTaskInactive');
    }
  }
}
</script>

<style lang="less" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #00000018;
}
.modal-wrapper {
  text-align: center;
  background-color: white;
  height: 300px;
  width: 500px;
  margin-top: 60px;
  padding: 60px 0;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form-check {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  padding: 0;
  margin-bottom: 8px;

  &__input {
    margin-right: 8px;
  }
}
.title {
  margin: 0 6px;
  width: auto;
  margin-bottom: 8px;
}
.step {
  height: 22px;
  width: 100%;
  margin-right: 8px;
}
.bi-plus-circle {
  margin-right: 8px;
}

.bi-plus-circle:hover {
  cursor: pointer;
  color: blue;
}
.bi-x-circle:hover {
  cursor: pointer;
  color: maroon;
}
</style>