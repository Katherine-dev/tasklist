<template class="MyModal">
  <div class="modal__mask">
    <div class="modal__wrapper">
      <div class="modal__header">
        <input
          class="form-control title"
          type="text"
          v-model="edTaskUpd.title"
          placeholder="Название..."
        />
        <div class="steps">
          <div
            class="form-check"
            v-for="(step, index) in edTaskUpd.steps"
            :key="index"
          >
            <input
              class="form-check__input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              :checked="step.done"
              v-model="step.done"
            />
            <input
              placeholder="Имя задачи"
              class="form-check-label form-control step"
              v-model="step.name"
              for="flexCheckDefault"
            />
            <i
              title="Удалить задачу"
              @click="removeSubtask(index)"
              class="bi bi-x-circle"
            ></i>
            <i
              title="Добавить задачу"
              v-show="index == edTaskUpd.steps.length - 1"
              @click="addSubtask"
              class="bi bi-plus-circle"
            ></i>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div>
          <button
            class="modal-default-button btn btn-danger"
            @click="showDeleteModal"
          >
            Удалить задание
          </button>
        </div>
        <div>
          <button class="modal-save-button btn btn-primary" @click="save">
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
      edTaskUpd: JSON.parse(JSON.stringify(this.$store.state.taskToEdit)),
    }
  },
  methods: {
    close() {
      this.$store.commit('editTaskInactive');
    },
    save() {
       if (this.edTaskUpd.title.trim()) {
         if (!(this.edTaskUpd.steps.map(element => element.name === undefined).includes(true))) {
          this.$store.commit('editTaskDone', this.edTaskUpd);
          this.$store.commit('saveTasks');
         } else {
           alert("Не все позадачи заполнены")
         }
       } else {
         alert("Вы не ввели название задачи");
       }
    },
    addSubtask() {
      this.edTaskUpd.steps.push({})
    },
    removeSubtask(stepId) {
      if (this.edTaskUpd.steps.length > 1) {
        this.edTaskUpd.steps = this.edTaskUpd.steps.filter((step, i) => i !== stepId )
      } else {
        alert("Нужно оставить минимум одну задачу")
      }
    },
    showDeleteModal() {
      this.$store.commit('deleteTaskActive', this.edTaskUpd);
    },
  },
}
</script>


<style lang="less" scoped>
.modal {
  &__mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #00000018;
    z-index: 1;
  }
  &__wrapper {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 60px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 30px;
  }
  &__header {
    display: flex;
    flex-direction: column;
    margin: 0 6px;
    margin-bottom: 8px;
    overflow-y: auto;
  }
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
  margin-bottom: 8px;
}
.steps {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.step {
  height: 22px;
  width: 100%;
  margin-right: 8px;
}

.bi-x-circle {
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
.modal-footer {
  display: flex;
  justify-content: space-between;
}

.modal-save-button {
  margin-right: 20px;
}
</style>