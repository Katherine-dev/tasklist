<template class="MyModal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div v-if="isDeleting">Вы уверены, что хотите удалить задачу?</div>
      <div v-else-if="isEditing">
        Вы уверены, что хотите отменить редактирование?
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
</template>

<script>
export default {
  computed: {
    isDeleting(){
      return this.$store.state.deleteTask;
    },
    isEditing(){
      return this.$store.state.isEditingModal;
    },
  },
  methods: {
    confirm() {
      if (this.isDeleting) {
        this.$store.commit('removeTask');
        this.$store.commit('saveTasks');
      } else if (this.isEditing) {
        this.$store.commit('closeEditingInactive')
      }
    },
    close() {
      if (this.isDeleting) {
      this.$store.commit('deleteTaskInactive');
      } else if (this.isEditing) {
       this.$store.commit('closeEditingInactive')
       this.$store.commit('editTaskActive');
      }
    }
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 2;
}
.modal-wrapper {
  text-align: center;
  background-color: white;
  height: 200px;
  width: 500px;
  margin-top: 60px;
  padding: 60px 0;
  border-radius: 20px;
}
</style>