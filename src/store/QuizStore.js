import { defineStore } from "pinia";

import api from "@/api";

import { useSessionStorage } from "@vueuse/core";

const defaultState = {
  _questionMap: {},
};
export const useQuizStore = defineStore("QuizStore", {
  state: () => {
    return {};
  },
  getters: {
    questionMap: (state) => state._questionMap,
  },
  actions: {
    async fetchQuestions() {
      let res = await api.getQuestions();
      this._questionMap = res.data;
    },
  },
});
