<template class="MyModal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <input
        class="form-control title"
        type="text"
        v-model="editedTask.title"
        placeholder="Название..."
      />
      <div class="steps">
        <div
          class="form-check"
          v-for="(step, index) in editedTask.steps"
          :key="index"
        >
          <input
            class="form-check__input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            :checked="step.done"
            @change="changeStep"
          />
          <label class="form-check-label" for="flexCheckDefault">
            {{ step.name }}
          </label>
        </div>
        <div class="modal-footer">
          <button class="modal-default-button btn btn-primary" @click="confirm">
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
  computed: {
    editedTask() {
      return this.$store.state.taskToEdit;
    }
  },
  methods: {
    close() {
      this.$store.commit('editTaskInactive');
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

  &__input {
    margin-right: 8px;
  }
}
.title {
  margin: 0 6px;
  width: auto;
  margin-bottom: 8px;
}
</style>