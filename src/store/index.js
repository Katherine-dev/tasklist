import { createStore } from "vuex";
import tasks from "@/assets/tasks.json";

export default createStore({
  state: {
    tasks: tasks,
    //редактирование задачи
    editTask: false,
    //удаление задачи
    deleteTask: false,
    //подтверждение выхода из окна редактирования
    isExitEditing: false,
    //создание новой задачи
    isCreatingTask: false,
    taskToRemove: null,
    taskToEdit: null,
  },
  mutations: {
    initTasks(state) {
      const localTasks = localStorage.getItem("tasks");
      if (localTasks) {
        state.tasks = JSON.parse(localTasks);
      } else {
        const parsed = JSON.stringify(state.tasks);
        localStorage.setItem("tasks", parsed);
      }
    },
    saveTasks(state) {
      const parsed = JSON.stringify(state.tasks);
      localStorage.setItem("tasks", parsed);
    },
    //удаление задачи
    deleteTaskActive(state, taskToRemove) {
      state.deleteTask = true;
      state.taskToRemove = taskToRemove;
      state.editTask = false;
      state.taskToEdit = null;
    },
    deleteTaskInactive(state) {
      state.deleteTask = false;
      state.taskToRemove = null;
    },
    removeTask(state) {
      state.deleteTask = false;
      state.tasks = state.tasks.filter((t) => t.id !== state.taskToRemove.id);
      state.taskToRemove = null;
      localStorage.removeItem("notes");
    },
    //редактирование задачи
    editTaskActive(state, taskToEdit = state.taskToEdit) {
      state.editTask = true;
      state.taskToEdit = taskToEdit;
    },
    editTaskInactive(state) {
      state.isExitEditing = true;
      state.taskToRemove = null;
    },
    editTaskDone(state, editedTask) {
      state.editTask = false;
      for (const task of state.tasks) {
        if (task.id === editedTask.id) {
          task.title = editedTask.title;
          task.steps = editedTask.steps;
        }
      }

      state.taskToEdit = null;
      localStorage.removeItem("notes");
    },

    closeEditingActive(state) {
      state.isExitEditing = true;
    },
    closeEditingInactive(state) {
      state.isExitEditing = false;
      state.editTask = false;
      state.taskToRemove = null;
      state.taskToEdit = null;
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
      localStorage.removeItem("notes");
    },
  },
  actions: {},
  modules: {},
});
