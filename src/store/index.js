import { createStore } from "vuex";
import tasks from "@/assets/tasks.json";

export default createStore({
  state: {
    tasks: tasks,
    editTask: false,
    deleteTask: false,
    //окно подтверждения выхода из окна редактирования
    isEditingModal: false,
    isCreatingTask: false,
    taskToRemove: null,
    taskToEdit: null,
  },
  mutations: {
    //удаление задачи
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
    //редактирование задачи
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
    editTaskDone(state, editedTask) {
      state.editTask = false;
      for (const task of state.tasks) {
        if (task.id === editedTask.id) {
          task.title = editedTask.title;
          task.steps = editedTask.steps;
        }
      }

      state.taskToEdit = null;
    },

    closeEditingActive(state) {
      state.isEditingModal = true;
    },
    closeEditingInactive(state) {
      state.isEditingModal = false;
    },
    //создание задачи
    createTaskActive(state) {
      state.isCreatingTask = true;
    },
    createTaskInactive(state) {
      state.isCreatingTask = false;
    },
    addTask(state, payload) {
      state.tasks.push(payload);
    }
  },
  actions: {},
  modules: {},
});
