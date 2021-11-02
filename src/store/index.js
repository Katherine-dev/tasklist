import { createStore } from "vuex";
import tasks from "@/assets/tasks.json";

export default createStore({
  state: {
    tasks: tasks,
    editTask: false,
    deleteTask: false,
    //окно подтверждения выхода из окна редактирования
    isEditingModal: false,
    taskToRemove: null,
    taskToEdit: null,
  },
  mutations: {
    deleteTaskActive(state, taskToRemove) {
      state.deleteTask = true;
      state.taskToRemove = taskToRemove;
    },
    deleteTaskInactive(state) {
      state.deleteTask = false;
      state.taskToRemove = null;
    },
    removeTask(state) {
      state.deleteTask = false;
      state.tasks = state.tasks.filter((t) => t.id !== state.taskToRemove.id);
      state.taskToRemove = null;
    },

    editTaskActive(state, taskToEdit = state.taskToEdit) {
      state.editTask = true;
      state.taskToEdit = taskToEdit;
    },
    editTaskInactive(state) {
      state.editTask = false;
      state.isEditingModal = true;
      state.taskToRemove = null;
    },
    //TODO
    editTask(state) {
      state.editTask = false;
      state.taskToEdit = null;
    },

    closeEditingActive(state) {
      state.isEditingModal = true;
    },
    closeEditingInactive(state) {
      state.isEditingModal = false;
    },
  },
  actions: {},
  modules: {},
});
